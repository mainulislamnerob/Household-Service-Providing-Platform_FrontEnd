// src/pages/OrdersPage.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authApiClient from "../services/auth-api-client";

const fmtMoney = (v) =>
  new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" })
    .format(Number(v || 0));

const StatusBadge = ({ status }) => {
  const color =
    status === "PAID" || status === "COMPLETED"
      ? "bg-green-100 text-green-700"
      : status === "CANCELLED"
      ? "bg-gray-200 text-gray-700"
      : "bg-yellow-100 text-yellow-700";
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-semibold ${color}`}>
      {status}
    </span>
  );
};

const PayStatusBadge = ({ payment }) => {
  const color =
    payment === "paid"
      ? "bg-green-100 text-green-700"
      : payment === "refunded"
      ? "bg-blue-100 text-blue-700"
      : "bg-red-100 text-red-700";
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-semibold ${color}`}>
      {payment}
    </span>
  );
};

const OrdersPage=()=> {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);      // array of orders
  const [count, setCount] = useState(0);         // for paginated APIs
  const [loading, setLoading] = useState(false);
  const [expanding, setExpanding] = useState({}); // orderId -> loading boolean
  const [open, setOpen] = useState({});           // orderId -> expanded?

  const loadOrders = async (url = "orders/") => {
    try {
      setLoading(true);
      const res = await authApiClient.get(url);
      const data = Array.isArray(res.data) ? res.data : res.data.results;
      setOrders(data || []);
      setCount(Array.isArray(res.data) ? (data?.length || 0) : (res.data.count || 0));
    } catch (err) {
      if (err?.response?.status === 401) {
        navigate("/auth/sign-in");
      } else {
        console.error("Failed to load orders:", err?.response || err);
        alert("Could not load orders.");
      }
    } finally {
      setLoading(false);
    }
  };

  // fetch items for a single order if not already present
  const ensureOrderItems = async (order) => {
    if (order.items && order.items.length) return order;
    try {
      setExpanding((s) => ({ ...s, [order.id]: true }));
      const res = await authApiClient.get(`orders/${order.id}/`);
      const full = res.data;
      setOrders((prev) =>
        prev.map((o) => (o.id === order.id ? full : o))
      );
      return full;
    } catch (err) {
      console.error("Failed to load order detail:", err?.response || err);
      alert(`Could not load items for order #${order.id}`);
      return order;
    } finally {
      setExpanding((s) => ({ ...s, [order.id]: false }));
    }
  };

  const toggleOpen = async (order) => {
    // expand & lazy-load items if needed
    if (!open[order.id]) {
      const updated = await ensureOrderItems(order);
      if (!updated.items) updated.items = [];
    }
    setOpen((o) => ({ ...o, [order.id]: !o[order.id] }));
  };

  useEffect(() => { loadOrders(); }, []);

  if (loading) return <div className="p-6">Loading orders…</div>;
  if (!orders.length) return <div className="p-6">No orders yet.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">My Orders <span className="opacity-70">({count || orders.length})</span></h1>

      <div className="space-y-4">
        {orders.map((o) => {
          const created = new Date(o.created_at);
          const items = o.items || [];
          const total = o.total_amount ?? "0.00";
          return (
            <div key={o.id} className="border rounded-lg p-4 bg-base-100">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <div className="text-sm opacity-70">Order</div>
                  <div className="text-lg font-semibold">#{o.id}</div>
                </div>
                <div className="text-sm">
                  <div><span className="opacity-70">Created:</span>{" "}
                    {isNaN(created) ? o.created_at : created.toLocaleString()}
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <StatusBadge status={o.status || "PENDING"} />
                    <PayStatusBadge payment={o.payment_status || "unpaid"} />
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm opacity-70">Total</div>
                  <div className="text-lg font-semibold">{fmtMoney(total)}</div>
                  <div className="text-xs opacity-70">
                    {items.length} item{items.length === 1 ? "" : "s"}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  className="btn btn-sm"
                  onClick={() => toggleOpen(o)}
                >
                  {open[o.id] ? "Hide items" : "View items"}
                </button>
                {o.payment_status === "unpaid" && (
                  <button className="btn btn-sm btn-primary" onClick={() => alert("Hook your payment flow here.")}>
                    Pay now
                  </button>
                )}
                <button className="btn btn-sm btn-ghost" onClick={() => navigate(`/orders/${o.id}`)}>
                  Details
                </button>
              </div>

              {/* Items */}
              {open[o.id] && (
                <div className="mt-4">
                  {expanding[o.id] ? (
                    <div>Loading items…</div>
                  ) : items.length ? (
                    <div className="overflow-x-auto">
                      <table className="table w-full">
                        <thead>
                          <tr>
                            <th className="text-left">Service</th>
                            <th className="text-right">Unit</th>
                            <th className="text-right">Qty</th>
                            <th className="text-right">Subtotal</th>
                          </tr>
                        </thead>
                        <tbody>
                          {items.map((it) => (
                            <tr key={it.id || `${o.id}-${it.service_title}`}>
                              <td className="text-left">
                                {it.service_title || it.service?.title || "Service"}
                              </td>
                              <td className="text-right">
                                {fmtMoney(it.unit_price ?? it.service?.price ?? 0)}
                              </td>
                              <td className="text-right">{it.quantity ?? 0}</td>
                              <td className="text-right">
                                {fmtMoney(it.subtotal ?? (Number(it.unit_price || it.service?.price || 0) * Number(it.quantity || 0)))}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="opacity-70">No items in this order.</div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default OrdersPage;