import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiClient from "../services/api-client";
import authApiClient from "../services/auth-api-client";

const ServiceDetails = () => {
  const { id } = useParams();
  const [cartId, setCartId] = useState(null);
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(false);
  const [adding, setAdding] = useState(false);
  const [qty, setQty] = useState(1);

  // fetch service details
  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        setLoading(true);
        const res = await apiClient.get(`services/${id}/`);
        if (isMounted) setService(res.data);
      } catch (err) {
        console.error("Failed to load service", err?.response || err);
      } finally {
        if (isMounted) setLoading(false);
      }
    })();
    return () => { isMounted = false; };
  }, [id]);

 const getCart = async () => {
    try {
      const res = await authApiClient.get("cart/"); // GET /api/cart/
        console.log(res.data)
        setCartId(res.data.id)
    } catch (err) {
      console.error("Failed to fetch cart", err?.response || err);
      return null;
    }
}
// fetch cart on mount
useEffect(() => {
  getCart();
}, []);

  // add service to cart
  const handleAddToCart = async () => {
    const raw = localStorage.getItem("authTokens");
    const access = raw ? JSON.parse(raw).access : null;
    if (!access) {
      alert("Please sign in first.");
      navigate("/auth/sign-in");
      return;
    }
    try {
      setAdding(true);
      const payload = {
        service_id: id,  // write by id
        cart_id: cartId, // from fetched cart
        quantity: Number(qty) || 1
      };
      const res = await authApiClient.post("cart/items/", payload);
      console.log("Cart item created/merged:", res.data); // contains { id, service{...}, quantity, added_at, unit_price, subtotal }
      alert("✅ Service added to cart");
    } catch (err) {
      const status = err?.response?.status;
      if (status === 401) {
        alert("Session expired. Please sign in again.");
        navigate("/auth/sign-in");
        return;
      }
      const msg = err?.response?.data
        ? (typeof err.response.data === "string" ? err.response.data : JSON.stringify(err.response.data))
        : err.message;
      console.error("Add to cart failed:", err?.response || err);
      alert(`❌ Failed to add to cart: ${msg}`);
    } finally {
      setAdding(false);
    }
  };

  if (loading) return <p>Loading service...</p>;
  if (!service) return <p>Service not found.</p>;

  // safe helpers
  const price = service.price ?? "0.00";
  const duration = Number.isInteger(service.duration_minutes)
    ? service.duration_minutes
    : "N/A";
  const avg = typeof service.average_rating === "number"
    ? service.average_rating.toFixed(1)
    : "0.0";
  const ratingCount = Number.isInteger(service.rating_count)
    ? service.rating_count
    : 0;

  return (
    <div className="max-w-2xl mx-auto bg-base-100 p-6 rounded shadow">
      <h1 className="text-3xl font-bold mb-3">{service.title}</h1>

      <p className="mb-5">
        {service.description && service.description.trim().length
          ? service.description
          : "No description provided."}
      </p>

      <ul className="mb-6 space-y-2 text-gray-700">
        <li><strong>💰 Price:</strong> {price}</li>
        <li><strong>⏱ Duration:</strong> {duration} minutes</li>
        <li><strong>⭐ Average Rating:</strong> {avg} / 5</li>
        <li><strong>👥 Rating Count:</strong> {ratingCount}</li>
      </ul>

      <div className="flex items-center gap-3 mb-4">
        <label className="font-medium">Quantity</label>
        <input
          type="number"
          min={1}
          value={qty}
          onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
          className="input input-bordered w-24"
        />
      </div>

      <button
        className="btn btn-primary"
        onClick={handleAddToCart}
        disabled={adding}
      >
        {adding ? "Adding..." : "Add to Cart"}
      </button>
    </div>
  );
};


export default ServiceDetails;
