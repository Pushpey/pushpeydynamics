import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BackButton from './BackButton'; 

import sample1 from "../assets/image/sample1.png";
import sample2 from "../assets/image/sample2.png";
import sample3 from "../assets/image/sample3.png";
import sample4 from "../assets/image/sample4.png";
import sample5 from "../assets/image/sample5.png";
import sample6 from "../assets/image/sample6.png";
import sample7 from "../assets/image/sample7.png";

const images = [sample1, sample2, sample3, sample4, sample5, sample6, sample7];

const projects = [
  { title: "Smart Notebook", desc: "Tech-powered learning companion.", link: "/projecttatva" },
  { title: "BookCollector", desc: "All-in-one digital schoolbook system.", link: "/bookcollector" },
  { title: "Smart Light Set", desc: "Smart lights for modern homes.", link: "/smartlightset" },
  { title: "Bag Tag Pro", desc: "Trackable smart tag for your bag.", link: "/bagtagpro" },
  { title: "KeyFinder Dock", desc: "Techy dock to find your keys instantly.", link: "/KeyFinderDock" },
  { title: "EcoPack Return", desc: "Reusable smart packaging system.", link: "/ecopackreturn" },
  { title: "QuickCircuit Hub", desc: "Digital playground for innovation.", link: "/quickcircuithub" },
];

const getImage = (i) => images[i % 7];

export default function Projects() {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-10 py-16 sm:py-20 bg-[#0e1c26] text-white">
      <BackButton />
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 tracking-wide">Our Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gradient-to-br from-[#1f2e3a] to-[#263845] p-4 rounded-2xl border border-[#3f5c71] shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 backdrop-blur-sm cursor-pointer"
          >
            <Link to={project.link} className="block h-full">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={getImage(i)}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-cyan-300">{project.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{project.desc}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
