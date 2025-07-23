import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";


import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Contact from "./components/Contact";
import ScrollToTop from './components/ScrollToTop';
import Donation from './components/Donation';
import AdminLogin from './pages/AdminLogin';
import Dashboard from './pages/Dashboard';



import ProjectTatva from './pages/ProjectTatva';
import BookCollector from './pages/Bookcollector';
import  SmartLightSet from './pages/SmartlightSet';
import Bagtagpro from './pages/Bagtagpro';
import EcoPackReturn from "./pages/EcoPackReturn";
import QuickCircuitHub from "./pages/QuickCircuitHub";
import KeyFinderDock from './pages/KeyFinderDock';




export default function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') ? true : false);
  return (
    <Router>
      <Navbar />
      <ScrollToTop />


      <div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />   {/* lowercase */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donation />} />
          <Route path="/AdminLogin" element={<AdminLogin setLoggedIn={setLoggedIn} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          

          <Route path="/KeyFinderDock" element={<KeyFinderDock />} />
          <Route path="/projecttatva" element={<ProjectTatva />} />
          <Route path="/bookcollector" element={<BookCollector />} />
          <Route path="/smartlightset" element={<SmartLightSet />} />
          <Route path="/bagtagpro" element={<Bagtagpro />} />

          <Route path="/ecopackreturn" element={<EcoPackReturn />} />
          <Route path="/quickcircuithub" element={<QuickCircuitHub />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );

}

