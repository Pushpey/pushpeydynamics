import { motion } from "framer-motion";
import { useEffect } from "react";
import BackButton from '../components/BackButton'; 

export default function BookCollector() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-10 lg:p-16 bg-gray-900 text-white transition-colors duration-500">
      <BackButton />
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center text-purple-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          BookCollector 📚
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            className="flex-1 bg-gray-800 text-white p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl relative overflow-hidden"
            initial={{ rotateY: 90 }}
            animate={{ rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              What is BookCollector?
            </h2>
            <p className="leading-relaxed text-base sm:text-lg text-gray-200">
              BookCollector is a sub-component of Project TATVA, designed to digitize and centralize access to school textbooks and educational materials. It replaces traditional physical books with a smart, reusable PDF reader interface. Through this system, students can carry an entire library within one device — enabling flexibility, sustainability, and enhanced learning.
            </p>

            <h2 className="text-xl font-semibold mt-6 text-green-400">Why BookCollector?</h2>
            <ul className="list-disc list-inside mt-2 text-gray-200 space-y-2 text-sm sm:text-base">
              <li>Reduces school bag weight dramatically</li>
              <li>Helps preserve the environment by reducing paper usage</li>
              <li>Compatible with national curriculum updates</li>
              <li>Helps organize books by subject, class, and syllabus</li>
              <li>Includes bookmarking and annotation tools for students</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 text-yellow-300">
              How it Integrates with TATVA
            </h2>
            <p className="mt-2 text-gray-200 text-sm sm:text-base">
              BookCollector seamlessly integrates with Project TATVA through a unified hardware-software ecosystem. TATVA acts as the main digital notebook, while BookCollector functions as the library unit within it. With a shared UI/UX environment, switching between note-taking and reading is frictionless. Files are synced, organized, and can even be referenced directly into notes using drag-and-drop or linking.
            </p>
            <p className="mt-2 text-gray-200 text-sm sm:text-base">
              The system uses custom-built firmware atop Raspberry Pi to access protected eBooks, and utilizes a secure cloud for school-authorized materials. Additional offline support ensures students can use it even without active internet. It also connects to TATVA's student dashboard, enabling progress tracking and integration with assignments.
            </p>

            <h2 className="text-xl font-semibold mt-6 text-blue-300">Key Features</h2>
            <ul className="list-disc list-inside mt-2 text-gray-200 space-y-2 text-sm sm:text-base">
              <li>Smart PDF Viewer with auto-categorization</li>
              <li>Offline and Online mode for book access</li>
              <li>Cross-device sync with TATVA dashboard</li>
              <li>Eco-stats: tracks how much paper you're saving!</li>
              <li>Gamified rewards for consistent usage and book returns</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 text-red-400">
              Future Scope
            </h2>
            <p className="mt-2 text-gray-200 text-sm sm:text-base">
              We plan to enhance BookCollector with AI search capabilities, allowing students to ask natural-language questions within the books. Future upgrades will also include multilingual support and integration with AR glasses for immersive reading.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
