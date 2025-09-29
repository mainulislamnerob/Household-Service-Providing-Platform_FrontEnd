import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiClient from "../services/api-client";
import s1 from "../assets/Deep Home Cleaning.jpeg";

const Services = () => {
  const [services, setServices] = useState([]);

  // fetch all services
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await apiClient.get("services/");
        setServices(response.data);
      } catch (err) {
        console.error("Failed to fetch services", err);
      }
    };
    fetchServices();
  }, []);

  // delete service
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this service?")) return;
    try {
      await apiClient.delete(`services/${id}/`);
      setServices((prev) => prev.filter((service) => service.id !== id));
      alert("✅ Service deleted successfully");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to delete service");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {services.map((service) => (
        <div key={service.id} className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src={s1} alt={service.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{service.title}</h2>
            <p>{service.description}</p>
            <p className="text-sm font-semibold text-gray-600">
              💰 Price: {service.price} | ⏱ {service.duration_minutes} min
            </p>

            <div className="card-actions justify-between mt-4">
              {/* Buy Button */}
              <button className="btn btn-primary">Add To Cart</button>

              {/* Edit Button */}
              <Link
                to={`/dashboard/service/${service.id}/edit`}
                className="btn btn-warning"
              >
                Edit
              </Link>

              {/* Delete Button */}
              <button
                onClick={() => handleDelete(service.id)}
                className="btn btn-error"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
