// import React from "react";
// import {
//   Cpu,
//   BrainCircuit,
//   Database,
//   Zap,
//   Server,
//   Wrench,
// } from "lucide-react";

// const services = [
//   {
//     icon: BrainCircuit,
//     title: "LLM Finetuning",
//     description:
//       "Tailor large language models to your specific domain and tasks for unparalleled accuracy.",
//   },
//   {
//     icon: Zap,
//     title: "AI Integration",
//     description:
//       "Seamlessly integrate AI capabilities into your existing workflows and applications.",
//   },
//   {
//     icon: Database,
//     title: "Data Preprocessing",
//     description:
//       "Clean, structure, and optimize your datasets to fuel high-performing AI models.",
//   },
//   {
//     icon: Cpu,
//     title: "Model Optimization",
//     description:
//       "Enhance model performance, reduce latency, and lower operational costs.",
//   },
//   {
//     icon: Server,
//     title: "AI Infrastructure",
//     description:
//       "Build and manage robust, scalable infrastructure for your AI development and deployment.",
//   },
//   {
//     icon: Wrench,
//     title: "Custom AI Solution",
//     description:
//       "Develop bespoke AI solutions from the ground up to solve your unique business challenges.",
//   },
// ];

// const Services = () => {
//   return (
//     <section id="services" className="bg-black text-white py-20 px-6 md:px-36 md:py-32">
//       {/* Heading */}
//       <div className="text-center mb-14">
//         <h2 className="text-4xl md:text-5xl font-bold mb-4">
//           Our Services
//         </h2>
//         <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
//         {/* <p className="text-gray-400 max-w-2xl mx-auto text-lg">
//           Empowering businesses with cutting-edge AI solutions designed to
//           accelerate growth, optimize operations, and drive innovation.
//         </p> */}
//       </div>

//       {/* Services Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 bg-black/30 backdrop-blur-md rounded-xl border border-white/10 shadow-lg p-8">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="bg-neutral-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-neutral-800 transform hover:-translate-y-2 transition-all duration-300"
//           >
//             <service.icon className="w-12 h-12 mb-5 text-violet-500" />
//             <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
//             <p className="text-gray-400">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;


import React from "react";
import {
  Cpu,
  BrainCircuit,
  Database,
  Zap,
  Server,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: BrainCircuit,
    title: "LLM Finetuning",
    description:
      "Tailor large language models to your specific domain and tasks for unparalleled accuracy.",
  },
  {
    icon: Zap,
    title: "AI Integration",
    description:
      "Seamlessly integrate AI capabilities into your existing workflows and applications.",
  },
  {
    icon: Database,
    title: "Data Preprocessing",
    description:
      "Clean, structure, and optimize your datasets to fuel high-performing AI models.",
  },
  {
    icon: Cpu,
    title: "Model Optimization",
    description:
      "Enhance model performance, reduce latency, and lower operational costs.",
  },
  {
    icon: Server,
    title: "AI Infrastructure",
    description:
      "Build and manage robust, scalable infrastructure for your AI development and deployment.",
  },
  {
    icon: Wrench,
    title: "Custom AI Solution",
    description:
      "Develop bespoke AI solutions from the ground up to solve your unique business challenges.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-black text-white py-20 md:px-36 md:py-32 relative"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Our Services
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Delivering innovative AI-powered solutions designed to accelerate
          business growth, optimize performance, and fuel innovation.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-6 md:gap-12 md:px-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative bg-neutral-900/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10 
                       hover:border-purple-400/40 hover:shadow-purple-500/20 
                       transform transition-all duration-500 hover:-translate-y-3 hover:rotate-1"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <service.icon className="w-12 h-12 mb-5 text-violet-400 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-[20px] md:text-2xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="hidden md:block text-gray-400">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
