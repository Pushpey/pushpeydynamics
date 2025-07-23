import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";


export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setDropdownOpen(!dropdownOpen);
  const closeMenu = () => setDropdownOpen(false);

  return (
    <nav className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white shadow-lg py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold tracking-wide text-[#ffb347]">
          Pushpey Dynamics
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-lg font-medium">
          <li>
            <Link to="/donate" className="text-pink-500 font-semibold hover:text-pink-600 transition duration-300">
              Donate us
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-[#ffd580] transition">Home</Link>
          </li>
          <li>
            <Link to="/projects" className="text-white hover:text-[#66fcf1]">Projects</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#66fcf1] transition-colors duration-200">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#ffd580] transition">Contact</Link>
          </li>
          <Link to="/AdminLogin">
            <FaUserCircle size={24} style={{ marginRight: "10px" }} />
          </Link>
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {dropdownOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {dropdownOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center text-lg font-medium">
          <Link to="/donate" onClick={closeMenu} className="block text-pink-500 font-semibold hover:text-pink-600">Donate us</Link>
          <Link to="/" onClick={closeMenu} className="block hover:text-[#ffd580]">Home</Link>
          <Link to="/projects" onClick={closeMenu} className="block hover:text-[#66fcf1]">Projects</Link>
          <Link to="/about" onClick={closeMenu} className="block hover:text-[#66fcf1]">About</Link>
          <Link to="/contact" onClick={closeMenu} className="block hover:text-[#ffd580]">Contact</Link>
        </div>
      )}
    </nav>
  );
}
