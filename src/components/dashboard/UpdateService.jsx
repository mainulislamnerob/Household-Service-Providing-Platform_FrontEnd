import React from "react";
import { useParams } from "react-router-dom";
import ServiceForm from "./ServiceForm";

const UpdateService = () => {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Update Service</h1>
      <ServiceForm serviceId={id} />
    </div>
  );
};

export default UpdateService;
