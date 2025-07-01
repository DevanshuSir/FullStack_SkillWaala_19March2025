import React from "react";
import Heroimage from "../assets/Quickzy.png";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-green-100  to-white px-6 py-12 md:flex items-center justify-between max-w-7xl mx-auto rounded-xl mt-10 m-10">
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 ">
          Fast Delbiery 🚀
        </h1>
        <p className="text-gray-800">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          quis.
        </p>
        <button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg ">
          Shop Now
        </button>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img src={Heroimage} alt="" className="w-full max-w-md mx-auto" />
      </div>
    </section>
  );
};

export default Hero;
