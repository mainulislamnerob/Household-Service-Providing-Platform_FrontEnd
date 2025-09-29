const HowItWorks = () => {
  const steps = [
    {
      step: "1",
      title: "Book a Service",
      text: "Choose the service you need and schedule a convenient time.",
    },
    {
      step: "2",
      title: "Get Confirmation",
      text: "We'll confirm your booking and assign a professional worker.",
    },
    {
      step: "3",
      title: "Enjoy the Service",
      text: "Relax while our trusted staff take care of your household needs.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-base">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-base-800 mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-bases-200 shadow-sm hover:shadow-lg transition"
            >
              <div className="text-4xl font-bold text-indigo-600 mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-base-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;