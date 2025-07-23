import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import BackButton from './BackButton'; 

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-blue-950 text-white px-4 py-12 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-10 text-center lg:text-left"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Get in Contact
      </motion.h1>
      < BackButton />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* Contact Info */}
        <motion.div
          className="lg:w-1/3 w-full space-y-4 text-base md:text-lg"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl">
            <p>📍 <strong>Location:</strong> Kanpur, India</p>
            <p>📩 <strong>Email:</strong> <a href="mailto:ps0560841@gmail.com" className="text-blue-300 underline">support@pushpeydynamics</a></p>
            <p>📸 <strong>Instagram:</strong> <a href="https://instagram.com/Quick.Circuit" target="_blank" className="text-blue-300 underline">@pushpey.dynamics</a></p>
            <p>💼 <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/pushpey-dev" target="_blank" className="text-blue-300 underline">linkedin.com/in/pushpey</a></p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="lg:w-2/3 w-full bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-xl"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Contact;
