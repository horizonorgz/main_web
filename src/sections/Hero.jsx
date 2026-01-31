import React from "react";
import heroImg from "../assets/herosection2.jpg";
import  { useState, useEffect } from "react";
import heroImgMobile from "../assets/herosection3.jpg";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640); // Tailwind sm breakpoint
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);


  return (
   <section
   id="hero"
  className="relative h-screen flex justify-center text-center bg-center bg-cover 
             items-start pt-[74px] sm:items-center sm:pt-[84px] "
  style={{
        backgroundImage: `url(${isMobile ? heroImgMobile : heroImg})`,
      }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative z-10 max-w-3xl px-6 mt-46 md:mt-24 animate-fadeIn">
    {/* Heading */}
    <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-[0_0_25px_rgba(186,104,255,0.5)]">
      Horizon Org
    </h1>

    {/* Tagline */}
    <p className="mt-3 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
      We are dedicated to researching, developing, and deploying safe and beneficial AI systems that empower progress, ensuring a future where innovation serves all with integrity and responsibility.
    </p>

    {/* CTA */}
    <button className="mt-8 px-8 py-3 border border-white text-white  rounded-full text-lg font-medium transition-all hover:scale-110 duration-300">
      Get Started
    </button>
  </div>

  {/* Bottom gradient fade */}
  <div
    className="absolute bottom-0 left-0 w-full h-40 pointer-events-none"
    style={{
      background:
        "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
    }}
  ></div>

  {/* Animation */}
  <style>
    {`
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fadeIn {
        animation: fadeIn 1.2s ease-out forwards;
      }
    `}
  </style>
</section>

  );
};

export default Hero;
