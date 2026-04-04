import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-5 px-5 lg:px-20 space-y-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col xl:w-[30%]">
          <h1 className="text-neon text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold">
            DevPortfolio
          </h1>
          <p className="text-gray-400 text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg uppercase">
            @ 2026 DevPortfolio. Built By Developer for Developers
          </p>
        </div>

        <div className="flex gap-4 w-full items-center justify-center">
          <h1 className="text-neon text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg">• Protocol Active</h1>
          <h1 className="text-gray-400 text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg">Global Nodes 1,233</h1>
        </div>
      </div>
      <p className="text-gray-400 text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg  uppercase text-center">
        Created by Prajwal Dnyaneshwar Ghadigaonkar
      </p>
    </footer>
  );
};

export default Footer;
