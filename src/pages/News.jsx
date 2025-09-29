import React from "react";

const News = () => {
  const newsData = [
    {
      id: 1,
      date: "September 20, 2025",
      title: "Launching Same-Day Cleaning Service",
      description:
        "We’re excited to announce our new same-day cleaning option, designed for urgent household needs. Book today and enjoy a spotless home in just hours!",
      link: "#",
    },
    {
      id: 2,
      date: "August 15, 2025",
      title: "Discount on Festival Season Packages",
      description:
        "Special discounts are now available on cooking and cleaning packages during the festive season. Make your celebrations stress-free with us!",
      link: "#",
    },
    {
      id: 3,
      date: "July 5, 2025",
      title: "New Plumbing & Electrical Team Added",
      description:
        "We’ve expanded our services with skilled plumbers and electricians to handle all your household maintenance needs more efficiently.",
      link: "#",
    },
  ];

  return (
    <section className="bg-base-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-base-800">
            Latest News & Updates
          </h2>
          <p className="text-base-600 mt-3">
            Stay updated with the latest announcements, offers, and services
            from our organization.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="bg-base-100 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <p className="text-sm text-base-500">{news.date}</p>
              <h3 className="text-xl font-semibold mt-2 mb-3 text-indigo-600">
                {news.title}
              </h3>
              <p className="text-base-700 mb-4">{news.description}</p>
              <a
                href={news.link}
                className="text-indigo-600 font-medium hover:underline"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
