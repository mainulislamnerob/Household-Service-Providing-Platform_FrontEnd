import React from "react";

const About = () => {
  return (
    <div className="bg-base-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-base-600 to-base-500 text-base-700 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Our Household Service Organization
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          We connect families with reliable and professional household services
          — making daily life easier, safer, and more comfortable.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="bg-base-100 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
            Our Mission
          </h2>
          <p className="text-base-700 leading-relaxed">
            To deliver trustworthy and affordable household services — from
            cleaning and cooking to maintenance and repairs — ensuring every
            home is a happy and stress-free environment.
          </p>
        </div>
        <div className="bg-base-100 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
            Our Vision
          </h2>
          <p className="text-base-700 leading-relaxed">
            To be the most reliable and customer-friendly household service
            provider, empowering skilled workers and creating a positive
            difference in everyday living.
          </p>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="bg-base-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-base-800 mb-12">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-base-100 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-indigo-600">
              Cleaning Services
            </h3>
            <p className="text-base-600">
              From regular housekeeping to deep cleaning — we keep your home
              sparkling and hygienic.
            </p>
          </div>
          <div className="bg-base-100 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-indigo-600">
              Cooking & Meal Prep
            </h3>
            <p className="text-base-600">
              Professional cooks for everyday meals or special occasions,
              customized to your taste.
            </p>
          </div>
          <div className="bg-base-100 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-indigo-600">
              Maintenance & Repairs
            </h3>
            <p className="text-gray-600">
              Skilled electricians, plumbers, and handymen to fix and maintain
              your household needs.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center bg-base-100 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Make Your Home Stress-Free?
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Join thousands of satisfied families who trust us for their household
          needs. Book a service today!
        </p>
        <button className="bg-base-100 text-base-800 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-base-200 transition">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default About;
