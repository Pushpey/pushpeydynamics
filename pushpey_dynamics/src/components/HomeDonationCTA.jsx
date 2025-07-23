import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomeDonationCTA = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full bg-gradient-to-br from-[#00568F] to-[#99D6FF] py-10 px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10 rounded-2xl shadow-lg border border-[#333]"
    >
      {/* Quote + Description */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full lg:w-1/2"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#D1C99F] mb-4 leading-snug text-center lg:text-left">
          "Be the reason someone believes in good hearts and brighter futures."
        </h2>
        <p className="text-base sm:text-lg text-black mb-6 text-center lg:text-left">
          Your support helps us build innovative solutions that empower people,
          protect the environment, and create a smarter, kinder world. Every donation counts. ❤️
        </p>
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="w-full lg:w-1/2 flex justify-center lg:justify-end"
      >
        <Link to="/donate">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#ff6f61] hover:bg-[#e65c50] transition-all duration-300 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-md hover:shadow-xl w-full sm:w-auto"
          >
            Donate Now
          </motion.button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default HomeDonationCTA;
