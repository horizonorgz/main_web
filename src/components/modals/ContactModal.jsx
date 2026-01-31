// import React from "react";

// const ContactModal = ({ onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
//         <button
//           className="absolute top-2 right-2 text-gray-600 hover:text-black"
//           onClick={onClose}
//         >
//           ✖
//         </button>
//         <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
//         <form className="space-y-4">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//           <textarea
//             placeholder="Your Message"
//             className="w-full p-2 border border-gray-300 rounded"
//             rows="4"
//           ></textarea>
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           >
//             Send
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactModal;



import React from "react";

const ContactModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-[1000]">
      {/* Background overlay with blur + footer gradient */}
      <div
        className="absolute inset-0 backdrop-blur-lg"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.14) 0%, rgba(0,0,0,0.95) 100%)",
        }}
      ></div>

      {/* Modal content */}
      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl w-96 text-white z-10">
        <button
          className="absolute top-2 right-2 text-gray-300 hover:text-white transition"
          onClick={onClose}
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
        <form className="space-y-4 text-center">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white-500"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white-500"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-violet-1000 to-indigo-800 w-50 px-6 py-3 rounded-full font-semibold hover:from-violet-800 hover:to-indigo-1000 transition-all duration-300 shadow-lg select-none"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
