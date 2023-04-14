import React from "react";
import EmbedVideo from "./EmbedVideo";
import { Line } from "rc-progress";

// Main Section
const Main = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row max-w-6xl m-auto sm:space-x-4 sm:justify-between mt-32 font-workSans">
      <div className="flex flex-col justify-between mt-10 sm:mt-0">
        <div>
          <input
            placeholder="Enter Your App Name"
            className="p-2.5 py-3 placeholder:text-slate-200 placeholder:text-sm placeholder:font-light bg-transparent text-white outline-none border-2 border-white w-[100%]"
          />
        </div>
        <div className="text-white my-4">
          <p className="py-3 font-light text-lg">Upload Game Files :</p>
          <div className="flex items-center gap-4">
            <button className="bg-[#4E36E8] py-2 px-6 rounded-lg">
              CSV for Story
            </button>
            <button className="bg-[#4E36E8] py-2 px-6 rounded-lg">
              Game Assests
            </button>
            <button className="bg-[#4E36E8] py-2 px-6 rounded-lg">
              App Icon
            </button>
          </div>

          <p className="text-blue-500 my-6 cursor-pointer underline">
            Download sample files by clicking here
          </p>

          <button className="py-3 px-10 my-2 rounded-lg bg-gradient-to-l text-white from-blue-500 to-red-400">
            Click to build the game
          </button>
          <div className="my-3">
            <Line
              percent={10}
              strokeWidth={2}
              trailWidth={4}
              strokeColor="#4E36E8"
              trailColor="#F5F5F5"
              className="rounded-md"
            />
            <p className="text-white text-base py-2">02:00 minutes remaining</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center">
        {/* CODE TO EMBED YOUTUBE VIDEO */}
        <EmbedVideo />
        <p className="text-center text-white text-xl font-medium">
          Check out the demo to get started
        </p>
      </div>
    </div>
  );
};

export default Main;
