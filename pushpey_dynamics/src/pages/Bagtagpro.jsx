import React from "react";
import { motion } from "framer-motion";
import BackButton from '../components/BackButton'; 

const Bagtagpro = () => {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white px-4 sm:px-6 md:px-12 py-12">
      <BackButton />
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-cyan-400 mb-8"
      >
        Project: Smart BagTag Pro
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-4xl mx-auto text-base sm:text-lg leading-relaxed text-gray-300 mb-8 px-2"
      >
        The Smart BagTag Pro is a part of Pushpey Dynamics' vision to smartly
        track and organize everyday essentials using technology. This compact,
        lightweight, smart bag tag device is embedded with a GPS tracker,
        Bluetooth connectivity, and customizable display screens, allowing users
        to locate their bags anytime, anywhere. It caters to students,
        travelers, and professionals alike.
      </motion.p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-[#161b22] p-6 rounded-xl shadow-lg"
        >
          <h2 className="text-xl font-semibold text-blue-400 mb-2">
            🔍 Key Features
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Live GPS & Bluetooth Tracking</li>
            <li>Custom Name Display (OLED)</li>
            <li>Rechargeable Battery (5-7 days backup)</li>
            <li>Companion App for Control & Alerts</li>
            <li>Lost Bag Alarm & Nearby Finder</li>
            <li>Minimal Design & Waterproof Build</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-[#161b22] p-6 rounded-xl shadow-lg"
        >
          <h2 className="text-xl font-semibold text-blue-400 mb-2">
            🌐 Use Cases
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Students tagging their school/college bags</li>
            <li>Travelers securing luggage in airports/hotels</li>
            <li>Professionals tracking work bags or gear kits</li>
            <li>Kids’ school bags for parental tracking</li>
            <li>Elderly & medical kit bags security</li>
          </ul>
        </motion.div>
      </div>

      {/* Tech Integration */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-12 max-w-5xl mx-auto bg-[#161b22] p-6 rounded-xl shadow-lg px-4"
      >
        <h2 className="text-xl font-semibold text-blue-400 mb-4">
          🔧 Tech & Integration
        </h2>
        <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
          BagTag Pro is built using ultra-low power modules integrated with GPS
          and BLE (Bluetooth Low Energy). A flexible micro OLED screen allows
          personalization while onboard storage logs movement history. It's
          designed to sync effortlessly with your smartphone, letting you update
          info, monitor routes, and even set proximity-based alerts.
        </p>
      </motion.div>

      {/* Sync with TATVA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-12 max-w-5xl mx-auto bg-[#161b22] p-6 rounded-xl shadow-lg px-4"
      >
        <h2 className="text-xl font-semibold text-blue-400 mb-4">
          🤝 How It Syncs with Project TATVA
        </h2>
        <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
          The Smart BagTag Pro integrates with Project TATVA by offering
          seamless school bag tracking and identity customization. Students can
          use the same app to access both their Smart Notebook (TATVA) and
          BagTag settings. It brings a unified, smart school ecosystem under
          Pushpey Dynamics. Parents and teachers can ensure safety while
          students enjoy the tech-enhanced lifestyle.
        </p>
      </motion.div>

      {/* Future Vision */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-12 max-w-5xl mx-auto bg-[#161b22] p-6 rounded-xl shadow-lg px-4"
      >
        <h2 className="text-xl font-semibold text-blue-400 mb-4">
          🌍 Future Vision
        </h2>
        <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
          In future iterations, the BagTag Pro will support voice alerts,
          geofencing, and emergency contact systems. We plan to collaborate with
          schools and travel brands for bulk distribution and integrated school
          dashboards. Smart accessories like BagTag are central to Pushpey
          Dynamics’ mission of smart, sustainable, and secure tech solutions.
        </p>
      </motion.div>
    </div>
  );
};

export default Bagtagpro;
