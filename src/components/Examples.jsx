import React from "react";
import game1 from "../assets/game-1.jpeg";
import game2 from "../assets/game-2.jpeg";

{
  /* Examples SECTION */
}
const Examples = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="h-[2px] bg-gray-200 my-5 w-[85%]" />
      <span className="text-2xl text-white">Games created using Wuri</span>
      <div className="flex space-x-10 sm:space-x-20 my-6">
        <img src={game1} alt="" className="w-[150px] sm:w-[280px]" />
        <img src={game2} alt="" className="w-[150px] sm:w-[280px]" />
      </div>
    </section>
  );
};

export default Examples;
