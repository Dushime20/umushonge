import * as React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center px-6 md:px-10">
      <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-6xl">
       

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-extrabold mb-4 text-green-800 [text-shadow:2px_2px_4px_rgba(0,0,0,0.2)]">
            Welcome to <span className="text-yellow-500">UmushongeStore</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            UMUSHONGE Flour is a nutritious, high-quality multigrain flour blend designed to
            enhance health and wellness while promoting Rwandan agricultural products.
          </p>
          <button className="bg-yellow-500 text-green-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 shadow-md transition duration-300">
            Shop Now
          </button>
        </div>
         {/* Logo */}
        <div className="flex justify-center">
          <img
            src="/image/logo.jpg"
            alt="Logo"
            className="w-60 h-60 object-contain rounded-xl shadow-xl border-4 border-yellow-400"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
