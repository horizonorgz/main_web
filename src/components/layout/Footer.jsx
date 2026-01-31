import React from "react";
import { Instagram, Linkedin, Github, Twitter } from "lucide-react";
import { Link,useLocation } from "react-router-dom";




const Footer = () => {

const location = useLocation();

const handleScrollTo = (sectionId) => {
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } 
  };

  return (
    <footer className="w-full bg-gradient-to-r bg-black py-20 px-6 md:px-36">

      <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <div>
            <h2 id="horizon" className="text-2xl text-white flex items-center gap-2">
              <span className="bg-black p-2 rounded-lg">
                <img
                  src="/logoyashraj1white.svg"
                  alt="Logo"
                  className="w-8 h-10 object-cover"
                />
              </span>
                Horizon Org
            </h2>
            <p className="text-gray-300 mt-4 text-sm max-w-xs">
             We build safe, beneficial AI to drive progress and ensure innovation serves all responsibly.
            </p>
          </div>

          <div className="flex justify-center">
           <ul className="flex flex-col md:flex-row gap-6 text-gray-300 text-sm">
      <li>
        <button
          onClick={() => handleScrollTo("hero")}
          className="transition-transform duration-300 hover:scale-110 inline-block"
        >
          Home
        </button>
      </li>
      <li>
        <Link
          to="/about"
          className="transition-transform duration-300 hover:scale-110 inline-block"
        >
          About
        </Link>
      </li>
      <li>
        <button
          onClick={() => handleScrollTo("services")}
          className="transition-transform duration-300 hover:scale-110 inline-block"
        >
          Services
        </button>
      </li>
      <li>
        <button
          onClick={() => handleScrollTo("blogs")}
          className="transition-transform duration-300 hover:scale-110 inline-block"
        >
          Blogs
        </button>
      </li>
    </ul>
          </div>

          {/* Right: Social Icons */}
          <div className="flex justify-center md:justify-end gap-5">
            <a href="#" className="text-gray-300 transition-transform duration-300 hover:scale-110 inline-block">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-300 transition-transform duration-300 hover:scale-110 inline-block">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-300 transition-transform duration-300 hover:scale-110 inline-block">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-300 transition-transform duration-300 hover:scale-110 inline-block">
              <Github size={20} />
            </a>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-400 text-sm">
          <p>Made with 🤍 in India | Powered by Horizon AI © {new Date().getFullYear()}</p>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;