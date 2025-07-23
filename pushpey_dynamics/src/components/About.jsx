import React from 'react';
import { motion } from 'framer-motion';
import BackButton from './BackButton'; 

export default function About() {
  return (
    <div className="bg-[#1e293b] text-white min-h-screen py-10 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 overflow-hidden">
      <BackButton />
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#66fcf1] mb-6 border-b-2 border-[#45a29e] pb-2 w-fit"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        About Us
      </motion.h1>

      <motion.p
        className="text-base sm:text-lg mb-4 text-gray-300 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Welcome to <span className="text-[#66fcf1] font-semibold">Pushpey Dynamics</span> – where innovation meets simplicity. We are on a mission to reimagine everyday tech products, focusing on user-friendly designs, sustainability, and smart solutions.
      </motion.p>

      <motion.p
        className="text-base sm:text-lg mb-4 text-gray-300 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Our goal is to empower students, professionals, and households by delivering intelligent tools that make life more efficient and meaningful. We believe in launching first in India and scaling globally with precision.
      </motion.p>

      <motion.p
        className="text-base sm:text-lg mb-4 text-gray-300 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        From smart notebooks to eco-packaging systems, our projects reflect a blend of futuristic thinking and practical execution.
      </motion.p>

      <motion.div
        className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div whileHover={{ scale: 1.03 }}>
          <h2 className="text-xl sm:text-2xl text-[#66fcf1] font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-300 leading-relaxed">
            To become a global tech innovator from India, building products that solve real-world problems with simplicity and class.
          </p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.03 }}>
          <h2 className="text-xl sm:text-2xl text-[#66fcf1] font-semibold mb-2">Our Focus Areas</h2>
          <ul className="list-disc pl-5 text-gray-300 space-y-1">
            <li>Smart Consumer Electronics</li>
            <li>Educational Tech</li>
            <li>Sustainable Packaging</li>
            <li>Automation & IOT</li>
            <li>Design-driven Innovation</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}
