import React from "react";

const BreakTimes = () => {
  return (
    <div className="my-5">
      <h2 className="text-sm font-bold text-gray-500 uppercase">add a break</h2>

      <div className="flex items-center gap-2 mt-3 py-2 px-5 bg-gray-100 rounded">
        <button className="bg-white p-2 rounded-full h-10 w-10 text-xs  shadow">
          10m
        </button>
        <button className="bg-white p-2 rounded-full h-10 w-10 text-xs  shadow">
          20m
        </button>
        <button className="bg-white p-2 rounded-full h-10 w-10 text-xs  shadow">
          30m
        </button>
        <button className="bg-white p-2 rounded-full h-10 w-10 text-xs  shadow">
          40m
        </button>
        <button className="bg-white p-2 rounded-full h-10 w-10 text-xs  shadow">
          50m
        </button>
      </div>
    </div>
  );
};

export default BreakTimes;
