import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import apiClient from "../../services/api-client";
import authApiClient from "../../services/auth-api-client";

const ServiceForm = ({ serviceId, onSuccess }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (serviceId) {
      const fetchService = async () => {
        try {
          const res = await apiClient.get(`services/${serviceId}/`);
          reset(res.data); // prefill form with existing data
        } catch (err) {
          console.error("Failed to load service", err);
        }
      };
      fetchService();
    }
  }, [serviceId, reset]);

  const onSubmit = async (data) => {
    try {
      if (serviceId) {
        await authApiClient.put(`services/${serviceId}/`, data);
        alert("✅ Service updated successfully");
      } else {
        await authApiClient.post("services/", data);
        alert("✅ Service added successfully");
      }
      if (onSuccess) onSuccess();
      reset();
    } catch (error) {
      console.error(error);
      alert("❌ Failed to save service");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto bg-base-100 p-6 rounded shadow-md">
      {/* Title */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Title</label>
        <input {...register("title", { required: true })} className="w-full p-2 border rounded" />
        {errors.title && <p className="text-red-500 text-sm">Title is required</p>}
      </div>
      {/* Description */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Description</label>
        <textarea {...register("description")} className="w-full p-2 border rounded" />
      </div>
      {/* Price */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Price</label>
        <input type="number" step="0.01" {...register("price", { required: true })} className="w-full p-2 border rounded" />
      </div>
      {/* Duration */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Duration (minutes)</label>
        <input type="number" {...register("duration_minutes")} className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-1">average_rating ()</label>
        <input type="number" {...register("average_rating")} className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-1">rating_count ()</label>
        <input type="number" {...register("rating_count")} className="w-full p-2 border rounded" />
      </div>
      {/* Submit */}
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        {serviceId ? "Update Service" : "Add Service"}
      </button>
    </form>
  );
};

export default ServiceForm;
