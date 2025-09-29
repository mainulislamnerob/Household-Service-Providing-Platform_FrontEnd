import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../../data/BlogData";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const BlogNews = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((post) => (
          <motion.div
            whileHover={{ scale: 1.002 }}
            key={post.id}
            className="bg-base-100 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <motion.img
              whileHover={{ scale: 1.5 }}
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-gray-400 text-sm mb-2">{post.date}</p>
              <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>

              {/* Read More Button */}
              <Link
                to={`/blog/${post.id}`}
                className="text-blue-600 font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogNews;
