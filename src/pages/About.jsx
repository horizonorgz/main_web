import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const founders = [
  {
    name: "Babusha Kolhe",
    title: "Founder",
    image: "/founder1.jpg", // Replace with your actual image path
    intro:
  "Babusha Kolhe is a tech enthusiast and founder, passionate about turning creative ideas into impactful web experiences.",
  },
  {
    name: "Yashraj Dudhe",
    title: "Founder",
    image: "/founder2.jpg", // Replace with your actual image path
    intro:
      "Yashraj Dudhe is a founder and machine learning enthusiast, dedicated to creating intelligent solutions that drive innovation and real-world impact.",
  },
];

const About = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen flex flex-col items-center justify-center py-26 px-4 bg-black">
        <div className="max-w-4xl w-full  border rounded-3xl p-10 shadow-lg z-10 animate-slideup">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 drop-shadow-lg">
            About Us
          </h1>
          <p className="text-gray-300 text-center mb-10 max-w-2xl mx-auto">
            At Horizon Org, we are dedicated to building safe, beneficial AI to drive progress and ensure innovation serves all responsibly. Meet our founders:
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {founders.map((founder, idx) => (
              <div
                key={idx}
                className="bg-black/70 border rounded-2xl p-6 flex flex-col items-center w-full md:w-1/2 shadow-xl group"
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-32 h-32 md:w-40 md:h-40 object-cover object-center rounded-full border-4 mb-4 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2"
                />
                <h2 className="text-2xl font-semibold text-white mb-1">{founder.name}</h2>
                <h3 className="text-violet-400 text-sm font-medium mb-3">{founder.title}</h3>
                <p className="text-gray-300 text-center text-sm">{founder.intro}</p>
              </div>
            ))}
          </div>
        </div>
        <style>
          {`
            @keyframes slideup {
              0% {
                opacity: 0;
                transform: translateY(60px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-slideup {
              animation: slideup 0.9s cubic-bezier(0.4,0,0.2,1) both;
            }
          `}
        </style>
      </section>
      <Footer />
    </>
  );
};

export default About;