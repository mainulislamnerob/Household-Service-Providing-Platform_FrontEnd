const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah J.",
      text: "The cleaning team was excellent! My home has never felt this fresh. Highly recommend.",
    },
    {
      name: "Rahim A.",
      text: "I booked a cook for a week and it was amazing. Healthy meals every day without stress.",
    },
    {
      name: "Priya K.",
      text: "Their electrician fixed our wiring in no time. Professional and affordable service.",
    },
  ];

  return (
    <section className="bg-base-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-base-800 mb-12">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-base-100 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <p className="text-base-700 italic mb-4">“{review.text}”</p>
              <h3 className="text-indigo-600 font-semibold">{review.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;