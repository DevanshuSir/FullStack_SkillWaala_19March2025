import React from "react";

const HomePage = () => {
  return (
    <div className=" bg-no-repeat bg-cover w-full h-screen  backdrop-grayscale flex items-center justify-center gap-10 sm:bg-red-400 md:bg-green-400 ">
      <h1 className="text-7xl font-bold text-red-900 font-mono hover:text-green-700 text-center ">
        Homepage
      </h1>

      <p className="text-sky-600 underline decoration-pink-500 hover:line-through underline-offset-4 uppercase bg-slate-600 border-solid border-8 border-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eius
        quisquam harum voluptatibus facilis non blanditiis quis omnis cumque ut.
      </p>

      <div className="bg-red-500 w-1/3 h-1/2 m-10 p-10 shadow-2xl shadow-green-700 opacity-75 rounded-2xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, in!
      </div>
    </div>
  );
};

export default HomePage;
