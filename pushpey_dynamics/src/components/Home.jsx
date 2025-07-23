import React from "react";
import { motion } from "framer-motion";
import poster from "../assets/image/poster.png";
import { Link } from "react-router-dom";
import HomeDonationCTA from "./HomeDonationCTA";
 

import team1 from "../assets/image/team1.png";
import team2 from "../assets/image/team2.jpg";
import team3 from "../assets/image/team3.png";
import team4 from "../assets/image/team4.png";

const teamMembers = [
  { name: "Pushpey Singh", role: "Founder & CEO", img: team1 },
  { name: "Farhan Ali", role: "Chief Technology Officer", img: team2 },
  { name: "Shivam Mavi", role: "Head of Design", img: team3 },
  { name: "Rohan Diwakar", role: "Lead Developer", img: team4 },
];

const Home = () => {
  return (
    <div className="bg-[#0a0f1c] text-white min-h-screen w-full overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="w-full py-6 px-4 md:px-6 flex flex-col items-center">
        <img
          src={poster}
          alt="QuickCircuit Poster"
          className="w-full  rounded-2xl shadow-lg mb-10 object-cover"
        />
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-sky-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to FutureTech
        </motion.h1>
        <motion.p
          className="text-md sm:text-lg md:text-xl text-center text-slate-300 px-2 sm:px-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Innovating your everyday life through smart, simple tech.
        </motion.p>
      </section>

      {/* Mission Section */}
      <section className="px-4 sm:px-6 md:px-20 py-10">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-sky-400 mb-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          💡 Our Mission / Projects
        </motion.h2>
        <motion.p
          className="text-slate-300 text-md sm:text-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          To make technology accessible and useful for everyone — from homes to classrooms.
          We're building smart gadgets that simplify life and help you focus on what matters most.
        </motion.p>
      </section>

      {/* Product Highlights */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6 md:px-20 py-12">
        {[
          "Smart Notebook",
          "BookCollector",
          "Smart Key Dock",
          "QuickCircuitHub",
          "EcoPackReturn",
          "SmartLightSet"
        ].map((feature, i) => (
          <motion.div
            key={i}
            className="bg-[#111827] rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer border border-sky-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-sky-400">{feature}</h2>
            <p className="text-slate-400 text-sm sm:text-base">
              A glimpse into our most exciting upcoming project — bringing intelligence and convenience to your hands.
            </p>
          </motion.div>
        ))}
      </section>

      <HomeDonationCTA />

      {/* Meet Our Team */}
      <section className="w-full py-16 bg-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-blue-400">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#1e293b] rounded-2xl p-4 shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-44 sm:h-48 object-cover rounded-xl mb-4 border-2 border-blue-500"
                />
                <h3 className="text-lg sm:text-xl font-semibold">{member.name}</h3>
                <p className="text-blue-300 text-sm sm:text-base">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="px-4 sm:px-6 md:px-20 py-10">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-sky-400 mb-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          🌈 Our Vision
        </motion.h2>
        <motion.p
          className="text-slate-300 text-md sm:text-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          To become a global leader in practical consumer tech — born in India, designed for the world.
        </motion.p>
      </section>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-6 right-6 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-full shadow-xl z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ⬆️
      </motion.button>
    </div>
  );
};

export default Home;
