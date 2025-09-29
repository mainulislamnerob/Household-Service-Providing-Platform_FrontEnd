import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "../../data/BlogData";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <h2 className="text-center text-red-500 py-12">Blog not found!</h2>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-400 mb-6">{blog.date}</p>
      <p className="text-gray-700 leading-relaxed mb-6">{blog.content}</p>

      {/* Back to Blog Page */}
      <Link to="/" className="text-blue-600 font-medium hover:underline">
        ← Back to Blogs
      </Link>
    </div>
  );
};

export default BlogDetails;
