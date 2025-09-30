import React, { useEffect, useState } from "react";
import authApiClient from "../../services/auth-api-client";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const handlePayment = (orderId) => {
    alert(`Initiate payment for Order ID: ${orderId}`);
    // Here you would typically call an API to process the payment
    try{
        authApiClient.post(`payments/process/`, {order_id: orderId}) // POST /api/payments/process/;
        console.log("Payment API called for Order ID:", orderId);
        alert("Payment process initiated!");
    }catch(err){
      console.log(err)
    }
  }

  const deleteOrder = async (id) => {
    // console.log("Deleting order with ID:", id);
    try {
      await authApiClient.delete(`orders/${id}/`);
      setOrders((prev) => prev.filter((order) => order.id !== id));
    } catch (err) {
      console.error("Failed to delete order:", err);
      alert("Failed to delete order");
    }
  }
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await authApiClient.get("orders/");
        setOrders(res.data);
        console.log(res.data);
      } catch (err) {
        console.error("Failed to fetch orders:", err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="mt-6 card bg-base-100 shadow-sm">
      <div className="card-body">
        <h3 className="card-title text-lg">Recent Orders</h3>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              {orders.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center">
                    No orders found
                  </td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr key={order.id}>
                    <td>#{order.id}</td>
                    <td>{order.user?.username || "N/A"}</td>
                    <td>
                      <div
                        className={`badge ${order.status === "COMPLETED"
                            ? "badge-success"
                            : order.status === "CANCELED"
                              ? "badge-error"
                              : "badge-warning"
                          }`}
                      >
                        {order.status}
                      </div>
                    </td>
                    <td>
                      {new Date(order.created_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </td>
                    <td>${order.total_amount}</td>
                    <td>
                      <button onClick={()=>handlePayment(order.id)} className="btn btn-sm btn-success">Payment</button>
                      <button onClick={() => deleteOrder(order.id)} className="btn btn-sm btn-error ml-3">Delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
