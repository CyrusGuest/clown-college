import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission, e.g., sending data to an API or an email service
    console.log(formData);
    alert("Message sent!");
  };

  return (
    <div>
      <Navbar />

      <div className="mx-auto max-w-4xl p-8 mb-12">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-8">
          Have any questions or want to get in touch with us? Fill out the form
          below!
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-3 border border-gray-300 "
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-3 border border-gray-300 "
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full p-3 border border-gray-300 "
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-purple-500 text-white  hover:bg-purple-600"
          >
            Send Message
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
