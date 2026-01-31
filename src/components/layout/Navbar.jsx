import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; 
import ContactModal from "../modals/ContactModal";
import Logo from "../common/Logo";

const Navbar = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", action: () => navigate("/") },
    { label: "Services", action: () => scrollToSection("services") },
    { label: "About", action: () => navigate("/about") },
    { label: "Contact", action: () => setShowModal(true) },
  ];

  return (
    <>
      {/* Navbar Container */}
      <nav className="fixed md:top-5 top-3 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl flex items-center h-16 justify-between z-50 px-2 md:px-6 bg-black/30 backdrop-blur-md rounded-xl border border-white/10 shadow-lg">

        
        {/* Left: Logo */}
         <div
    className="cursor-pointer flex-shrink-0 -ml-3 md:-ml-6"
    onClick={() => navigate("/")}
  >
    <div className="inline-block p-1  pt-4 rounded-md text-white">
      <Logo />
    </div>
  </div>

        {/* Center Nav Links (Desktop) */}
        <div className="hidden md:flex space-x-10  rounded-full px-8 py-3   ">
          <ul className="flex space-x-10 text-white font-semibold text-base md:text-lg">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="cursor-pointer hover:scale-110 transition-all duration-300 ]"
                onClick={link.action}
              >
                {link.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Get Started + Hamburger */}
        <div className="flex items-center space-x-4">
          <button
            className="hidden md:inline-block bg-gradient-to-r from-violet-1000 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:from-violet-900 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-violet-700/40 select-none"
            onClick={() => alert("Get Started Clicked")}
          >
            Get Started
          </button>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="md:hidden text-white p-2 rounded-md hover:bg-white/20 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="fixed top-[72px] left-0 w-full bg-black/90 backdrop-blur-lg text-white shadow-lg z-40 md:hidden border-t border-white/10 rounded-b-lg">
          <ul className="flex flex-col space-y-5 p-6 text-lg font-semibold">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-violet-300 transition"
                onClick={link.action}
              >
                {link.label}
              </li>
            ))}
            <li>
              <button
                className="bg-gradient-to-r from-violet-1000 to-indigo-500 w-full px-6 py-3 rounded-full font-semibold hover:from-violet-400 hover:to-indigo-400 transition-all duration-300 shadow-lg select-none"
                onClick={() => alert("Get Started Clicked")}
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      )}

      {showModal && <ContactModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Navbar;
