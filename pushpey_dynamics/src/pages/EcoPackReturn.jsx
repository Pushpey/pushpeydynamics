import { motion } from "framer-motion";
import BackButton from '../components/BackButton'; 

const EcoPackReturn = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-[#0b1120] to-[#172132] text-white flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center text-green-400 drop-shadow-lg"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        ♻️ EcoPack Return
      </motion.h1>
      <BackButton />

      <motion.p
        className="w-full max-w-5xl text-base sm:text-lg md:text-xl lg:text-2xl text-center leading-relaxed text-gray-300 drop-shadow-sm"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Our <span className="text-green-400 font-semibold">EcoPack Return</span> initiative aims to revolutionize packaging in the e-commerce and retail sectors. By eliminating wasteful single-use plastic and cardboard, we introduce intelligent, durable, and traceable packaging solutions.
        <br /><br />
        🌱 <span className="text-blue-400 font-medium">How it works:</span> Customers receive their products in stylish reusable EcoPacks. After use, they can either drop them at designated return points or schedule a pickup through our mobile app. Each return earns reward points and shows their personal contribution to a greener world.
        <br /><br />
        🛰️ <span className="text-yellow-400 font-medium">Smart Features:</span> Every EcoPack is embedded with a unique QR code or NFC chip to enable real-time tracking and monitoring of return cycles. The system provides data on usage frequency, location-based return analysis, and more.
        <br /><br />
        🧠 <span className="text-purple-400 font-medium">Brand & Logistics Benefits:</span> Businesses can brand their EcoPacks and use our platform to enhance logistics efficiency, reduce environmental impact, and access in-depth data analytics.
        <br /><br />
        💰 <span className="text-pink-400 font-medium">Revenue Generation:</span> Monetization will be achieved via pack ads, environmental impact dashboards, and data partnerships with delivery services and green organizations.
        <br /><br />
        🌍 <span className="text-green-400 font-medium">Sustainable Future:</span> Aligned with Pushpey Dynamics' mission, EcoPack Return supports smart city infrastructure and eco-conscious living. It's not just packaging—it's a movement.
      </motion.p>
    </motion.div>
  );
};

export default EcoPackReturn;
