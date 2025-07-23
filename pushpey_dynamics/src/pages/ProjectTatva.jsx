import React from "react";
import { motion } from "framer-motion";
import BackButton from '../components/BackButton'; 

export default function ProjectTatva() {
  return (
    <div className="bg-gradient-to-br from-[#0f172a]/90 to-[#1e293b]/90 text-white px-4 py-8 sm:px-6 md:px-12 min-h-screen">
      <BackButton />
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title */}
        <motion.header
          className="text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 mb-3">
            Project TATVA
          </h1>
          <p className="text-base sm:text-lg text-gray-300 italic">
            Tech-Assisted Thought & Visual Assistant
          </p>
        </motion.header>

        {/* Section Wrapper */}
        <div className="space-y-10 text-sm sm:text-base md:text-lg">
          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-cyan-300">Introduction</h2>
            <p className="text-gray-200 leading-relaxed">
              Project TATVA aims to revolutionize traditional education by introducing a smart,
              interactive digital notebook. Designed for students from 5th grade to graduation, this
              device integrates learning, creativity, and productivity in a sleek and accessible platform.
            </p>
          </motion.section>

          {/* Key Features */}
          <motion.section
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-cyan-300">Key Features</h2>
            <ul className="list-disc pl-5 text-gray-200 space-y-2">
              <li>Touchscreen notebook with stylus support</li>
              <li>BookCollector system for accessing all school books digitally</li>
              <li>Searchable, categorized handwritten notes</li>
              <li>Cloud sync and offline storage modes</li>
              <li>Subject-specific note templates & smart folders</li>
              <li>Distraction-free minimal UI for students</li>
              <li>Durable design for Indian classrooms</li>
            </ul>
          </motion.section>

          {/* Tech Stack */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-cyan-300">Tech Stack</h2>
            <p className="text-gray-200 leading-relaxed">
              TATVA runs on a 15-inch LCD touchscreen powered by a Raspberry Pi compute module. Its
              software stack includes:
            </p>
            <ul className="list-disc pl-5 text-gray-200 mt-2 space-y-1">
              <li>Custom Linux OS optimized for speed & minimalism</li>
              <li>Frontend UI built using React.js with Tailwind CSS</li>
              <li>Backend via Node.js and Firebase for syncing and data storage</li>
              <li>BookCollector: sub-module for managing school PDFs/books</li>
            </ul>
          </motion.section>

          {/* Design Goals */}
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-cyan-300">Design Goals & Vision</h2>
            <p className="text-gray-200 leading-relaxed">
              The project is intended to be student-first — affordable, lightweight, and fast. Our aim
              is to eliminate the dependency on paper while enhancing focus and productivity through a
              clean, supportive interface. It's about empowering rural and urban India alike with
              reliable, modern tools.
            </p>
          </motion.section>

          {/* Research Highlights */}
          <motion.section
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-cyan-300">Research Highlights</h2>
            <ul className="list-disc pl-5 text-gray-200 space-y-2">
              <li>Target audience: students from grade 5 to graduation (focus on India)</li>
              <li>Smart Notebook + BookCollector = Paperless Education</li>
              <li>Focus on low-power components, recyclable packaging, and minimal manufacturing waste</li>
              <li>Tested prototype layout designed using Tinkercad</li>
              <li>Market-ready with MVP build from 20th May</li>
              <li>Environment-first approach integrated into core product philosophy</li>
            </ul>
          </motion.section>

          {/* Future Scope */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-cyan-300">Future Scope</h2>
            <ul className="list-disc pl-5 text-gray-200 space-y-2">
              <li>AI-integrated learning assistant for summarizing handwritten notes</li>
              <li>Voice-based search and accessibility</li>
              <li>Local language support and teacher dashboards</li>
              <li>Smart sync with classroom smartboards and devices</li>
            </ul>
          </motion.section>
        </div>

        {/* Footer */}
        <motion.footer
          className="text-center border-t border-gray-700 pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="text-gray-400 italic">
            Project TATVA is more than a tech product — it's a bold step toward transforming the way
            India learns. 📘💫
          </p>
        </motion.footer>
      </div>
    </div>
  );
}
