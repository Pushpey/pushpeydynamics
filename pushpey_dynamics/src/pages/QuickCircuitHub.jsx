import { motion } from "framer-motion";
import BackButton from '../components/BackButton'; 

const QuickCircuitHub = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white px-4 py-10 sm:px-6 md:px-10 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        ⚡ QuickCircuit Hub
      </motion.h1>
      <BackButton />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-6xl w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {[
          {
            title: "📈 Trending Tech Reels",
            color: "text-cyan-400",
            desc: "Stay ahead in tech with daily Instagram reels covering innovations, tools, tips, and product deep-dives. Perfect for tech lovers and curious minds who want bite-sized insights.",
          },
          {
            title: "🧠 AI-Powered Content",
            color: "text-emerald-400",
            desc: "Our content is backed by AI research ensuring it's always trending, relevant, and creative. With real-time data mining and sentiment analysis, we craft posts that resonate.",
          },
          {
            title: "🎥 Content Engine",
            color: "text-pink-400",
            desc: "With our 1-hour daily hustle strategy, we combine human creativity and AI efficiency to consistently produce impactful content. We focus on tech news, gadget teardowns, product reviews, and practical how-tos.",
          },
          {
            title: "🌐 Growing Community",
            color: "text-yellow-400",
            desc: "QuickCircuit is building a tight-knit community of young innovators, creators, and learners. Engage, share, and grow together as we redefine how tech is perceived and used.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#1e293b] p-6 rounded-2xl shadow-xl hover:scale-105 transform transition duration-300"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <h2 className={`text-2xl sm:text-3xl font-bold mb-4 ${ item.color }`}>
              {item.title}
            </h2>
            <p className="text-base sm:text-lg leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-12 sm:mt-16 text-center max-w-4xl text-base sm:text-lg md:text-xl text-gray-300 px-2"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        🚀 Join the movement. Witness the evolution of micro-content driven by AI and human creativity. At QuickCircuit, we're not just sharing tech — we're shaping how the world sees it.
      </motion.div>
    </motion.div>
  );
};

export default QuickCircuitHub;
