import React from "react";
import { motion } from "framer-motion";
import BackButton from '../components/BackButton'; 

const KeyFinderDock = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4 sm:px-6 md:px-8 py-12">
     <BackButton />
     <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 mb-6 sm:mb-8 text-center sm:text-left">
          Key Finder Dock
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-6 text-justify">
          The Key Finder Dock is a smart accessory designed to eliminate the frustration
          of lost keys. It's a stylish, minimal docking station that not only organizes
          your keys but integrates a smart tracking system. With a small, embedded chip
          and mobile app sync, this dock ensures you always know where your keys are.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-300 mb-4">Why Key Finder Dock?</h2>
        <ul className="list-disc ml-5 sm:ml-6 mb-6 space-y-2 text-base sm:text-lg">
          <li>Never misplace your keys again.</li>
          <li>Smart notification on mobile if keys are left behind.</li>
          <li>Elegant design, perfect for modern homes.</li>
          <li>Built-in sound buzzer for location tracking.</li>
          <li>Works as both dock and wall-mounted holder.</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-300 mb-4">Features</h2>
        <ul className="list-disc ml-5 sm:ml-6 mb-6 space-y-2 text-base sm:text-lg">
          <li>Bluetooth-enabled chip inside key holder</li>
          <li>Rechargeable internal battery with USB-C port</li>
          <li>LED indicators on the dock for quick status view</li>
          <li>Connected app for real-time tracking and alerts</li>
          <li>Multiple key support with individual alerts</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-300 mb-4">How it adds value</h2>
        <p className="text-base sm:text-lg md:text-xl mb-6 text-justify">
          This product enhances convenience in daily routines. It fits perfectly in
          entryways, bedrooms, or workspaces. By combining aesthetics with smart tech,
          it gives users peace of mind and saves time that would otherwise be spent
          searching for lost items. With the increasing use of IoT devices, the Key Finder Dock
          is a modern solution for modern households.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-300 mb-4">Future Expansion</h2>
        <p className="text-base sm:text-lg md:text-xl text-justify">
          Integration with Project TATVA will enable this dock to function not just as a
          key tracker but as a personalized smart notification center, syncing schedules,
          reminding users of essentials while they grab their keys. We aim to expand its use
          for wallets and bags as well, making it a complete home-accessory smart hub.
        </p>
      </motion.div>
    </div>
  );
};

export default KeyFinderDock;
