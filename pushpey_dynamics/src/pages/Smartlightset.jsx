import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import BackButton from '../components/BackButton'; 

const SmartLightSet = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 1.5 } });
  }, [controls]);

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white px-4 sm:px-6 py-10 font-sans relative overflow-hidden">
      <BackButton />
      {/* Glowing Circle */}
      <div className="absolute top-5 left-5">
        <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-yellow-400 animate-pulse shadow-lg shadow-yellow-300"></div>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="max-w-5xl mx-auto text-left"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-4 border-b-2 border-blue-500 inline-block pb-1">
          Smart Light Set 💡
        </h1>

        {/* Project Overview */}
        <section className="my-6 sm:my-8">
          <h2 className="text-xl sm:text-2xl text-yellow-300 mb-2">🌟 Project Overview</h2>
          <p className="text-base sm:text-lg leading-7 text-gray-300">
            The Smart Light Set is designed to revolutionize how middle- and lower-middle-class families experience lighting during power outages. It consists of multiple rechargeable lights that are controlled via a central smart remote. This setup ensures lighting in critical areas of the home like the kitchen, study, and living room without needing an inverter. For upper-class families, we will introduce a premium version with smart configurations, color lighting modes, and inverter support.
          </p>
        </section>

        {/* Key Features */}
        <section className="my-6 sm:my-8">
          <h2 className="text-xl sm:text-2xl text-green-300 mb-2">🔌 Key Features</h2>
          <ul className="list-disc ml-5 sm:ml-6 space-y-2 text-gray-300 text-base sm:text-lg">
            <li>Centralized Smart Remote</li>
            <li>Rechargeable and wireless lights</li>
            <li>Affordable and modular installation</li>
            <li>Multiple lighting combinations for premium model</li>
            <li>Perfect for areas with frequent power cuts</li>
            <li>Future upgrade compatibility with IoT and Project TATVA</li>
          </ul>
        </section>

        {/* Technical Insights */}
        <section className="my-6 sm:my-8">
          <h2 className="text-xl sm:text-2xl text-pink-300 mb-2">🔧 Technical Insights</h2>
          <p className="text-base sm:text-lg leading-7 text-gray-300">
            The lights are designed using low-power consuming LEDs and rechargeable lithium-ion batteries. The central remote will communicate via RF or WiFi, and may include smart app control in premium versions. Components will be sourced locally to reduce costs and ensure easy maintenance. The form factor will be designed keeping in mind both aesthetics and usability in compact homes.
          </p>
        </section>

        {/* Integration with Tatva */}
        <section className="my-6 sm:my-8">
          <h2 className="text-xl sm:text-2xl text-indigo-300 mb-2">🔗 Integration with TATVA</h2>
          <p className="text-base sm:text-lg leading-7 text-gray-300">
            The Smart Light Set can sync with Project TATVA to automatically adjust lighting in the study environment, promoting better focus and energy-saving. The integrated remote can also serve as an assistant interface for TATVA users in household environments.
          </p>
        </section>

        {/* Market Potential */}
        <section className="my-6 sm:my-8">
          <h2 className="text-xl sm:text-2xl text-red-300 mb-2">🚀 Market Potential</h2>
          <p className="text-base sm:text-lg leading-7 text-gray-300">
            With a massive population segment still dependent on power backups, this solution fits right into the market gap. Targeting Tier 2 and Tier 3 cities initially, followed by global deployment in developing nations.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-10 sm:mt-12 border-t border-gray-600 pt-6 text-center text-xs sm:text-sm text-gray-400">
          A project by Pushpey Dynamics. Lighting homes. Empowering lives.
        </footer>
      </motion.div>
    </div>
  );
};

export default SmartLightSet;
