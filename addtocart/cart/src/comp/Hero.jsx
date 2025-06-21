import React from "react";
import ImageFashion from "../assets/hero.png";

const Hero = () => {
  return (
    <div>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center">
          {/* Left */}
          <div className="md:w-1/2 text-center md:text-left space-x-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Discover Our Latest Product 😍
            </h1>
            <p className="text-gray-600 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              sunt non iste ipsa. Corrupti ad debitis quisquam maxime vel
              laborum!
            </p>
            <div className="flex justify-center md:justify-start gap-5 my-8">
              <button className="bg-indigo-800 text-white px-6 py-3 rounded-lg hover:bg-indigo-950">
                Shop Now
              </button>
              <button className="bg-gray-400 px-6 py-3 rounded-lg hover:bg-gray-500">
                Learn More
              </button>
            </div>
          </div>
          {/* Right */}

          <div className="md:w-1/2">
            <img
              src={ImageFashion}
              alt="Fashion"
              className="w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
