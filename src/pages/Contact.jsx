import React from 'react';
import { useForm } from 'react-hook-form';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import apiClient from '../services/api-client';
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    apiClient.post('contact-messages/', data)
      .then(response => {
        console.log('Form submitted successfully:', response.data);
        alert('Form submitted successfully!');
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        alert('Error submitting form. Please try again.');
      });
  }

  return (
    <div className="my-10">
      <h1 className="text-3xl font-semibold">Contact Details</h1>
      <div className="my-10 flex flex-col md:flex-row justify-center items-center gap-10">
        {/* Left Side - Info */}
        <div>
          <p>If you still have any questions, please contact us at our request.</p>
          <h1 className="text-lg font-medium mt-5">Phone:</h1>
          <p>01705308689</p>
          <p>01716497155</p>
          <h1 className="text-lg font-medium mt-5">Email:</h1>
          <p>mdmainulislamnerob52@gmail.com</p>
          <h1 className="text-lg font-medium mt-5">Address:</h1>
          <p>
            West Shewrapara,Mirpur,Dhaka-1216,Bangladesh
          </p>
          <p className="flex gap-10 text-2xl mt-5">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="w-full max-w-md">
          <h1 className="text-2xl mb-5 font-bold">Please Fill Out the Contact Form</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="my-3">
              <label htmlFor="name">Name:</label>
              <input
                {...register("name", { required: "Name is required" })}
                className="w-full border p-2 rounded"
                type="text"
                id="name"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div className="my-3">
              <label htmlFor="email">Email:</label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                })}
                className="w-full border p-2 rounded"
                type="email"
                id="email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div className="my-3">
              <label htmlFor="sub">subject:</label>
              <input
                {...register("subject", { required: "Name is required" })}
                className="w-full border p-2 rounded"
                type="text"
                id="sub"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            <div className="my-3">
              <label htmlFor="message">Message:</label>
              <textarea
                {...register("message", { required: "Message is required" })}
                className="w-full border p-2 rounded"
                id="message"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>

            <button type="submit" className="btn btn-outline w-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
