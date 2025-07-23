import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-blue-400">About Pushpey Dynamics</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Pushpey Dynamics is an emerging tech company focused on innovative consumer electronics,
            smart daily-use tech, and eco-friendly product design. We aim to revolutionize everyday life
            through smart, accessible technology.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-blue-300 transition">Home</a></li>
            <li><a href="/projects" className="hover:text-blue-300 transition">Projects</a></li>
            <li><a href="/about" className="hover:text-blue-300 transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-blue-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-blue-400">Contact Us</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Email: <a href="mailto:ps0560841@gmail.com" className="text-blue-300 hover:underline">ps0560841@gmail.com</a></li>
            <li>Phone: +91 9336192546</li>
            <li>Location: Kanpur, India</li>
          </ul>
        </div>

        {/* Map Embed */}
        <div className="rounded-lg overflow-hidden shadow-lg h-52 sm:h-40 w-full">
          <iframe
            title="Kanpur Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.3331297455956!2d80.33187367595798!3d26.449923876909636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c472448b0a5a5%3A0xe03a2c9ed7b42097!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1622613194862!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} Pushpey Dynamics. All rights reserved.
      </div>
    </footer>
  );
}
