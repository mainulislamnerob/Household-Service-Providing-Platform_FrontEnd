import { useEffect, useState } from "react";
import authApiClient from "../services/auth-api-client";

const CartPage=() =>{
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const load = async (url = "cart/items/") => {
    try {
      setLoading(true);
      const res = await authApiClient.get(url);
      const data = Array.isArray(res.data) ? res.data : res.data.results;
      setItems(data || []);
    } catch (e) {
      if (e?.response?.status === 401) window.location.href = "/auth/sign-in";
      else console.error("Load cart failed:", e?.response || e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const removeItem = async (id) => {
    try {
      await authApiClient.delete(`cart/items/${id}/`);
      setItems(prev => prev.filter(x => x.id !== id));
    } catch (e) {
      alert("Failed to remove item");
      console.error(e?.response || e);
    }
  };

  // If your serializer returns unit_price/subtotal, use them.
  // Otherwise compute from service.price * quantity.
  const getSubtotal = (it) =>
    it.subtotal ?? (Number(it?.service?.price ?? 0) * Number(it.quantity ?? 0));

  let total = items.reduce((sum, it) => sum + getSubtotal(it), 0);

  if (loading) return <p>Loading cart…</p>;
  if (!items.length) return <p>Your cart is empty.</p>;

const handleOrderNow = (item) => {
    console.log("Order placed for item:", item);
    const payload = { service_title: item.service.title,unit_price:getSubtotal(item), quantity: item.quantity,subtotal:getSubtotal(item).toFixed(2) }
    alert(`Order placed for ${item.service?.title || "service"} (Qty: ${item.quantity})`);
    // Here you would typically call an API to process the order
    try{
        authApiClient.post("orders/", {total_amount:total, items:[payload]}) // POST /api/orders/;
        console.log("Order API called with:", {total_amount:total, items:[payload]});
        alert("Order successfully placed!");
        // After ordering, you might want to remove the item from the cart
        removeItem(item.id);
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">My Cart</h1>
      <ul className="space-y-3">
        {items.map(it => (
          <li key={it.id} className="p-4 rounded border flex justify-between items-center">
            <div>
              <div className="font-medium">{it.service?.title ?? "Service"}</div>
              <div className="text-sm opacity-70">
                Unit: {it.service?.price ?? "0.00"} | Qty: {it.quantity}
                {it.cart_id ? <> | Cart: {it.cart_id}</> : null}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="font-semibold">
                {getSubtotal(it).toFixed(2)}
              </div>
              <button className="btn btn-sm" onClick={()=>handleOrderNow(it)}>orderNow</button>
              <button className="btn btn-sm" onClick={() => removeItem(it.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-right text-lg font-semibold">
        Total: {total.toFixed(2)}
      </div>
    </div>
  );
}

export default CartPage;