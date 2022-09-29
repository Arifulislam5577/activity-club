import React from "react";

const BreakTimes = ({ handleBreakTime }) => {
  const breakTimes = [10, 20, 30, 40, 50];
  return (
    <div className="my-5">
      <h2 className="text-sm font-bold text-gray-500 uppercase">add a break</h2>

      <div className="flex items-center gap-2 mt-3 py-2 px-5 bg-gray-100 rounded">
        {breakTimes.map((time, index) => (
          <button
            key={index}
            className="bg-white
            p-2 rounded-full h-10 w-10 text-xs  shadow hover:bg-violet-700 hover:text-white"
            onClick={() => {
              handleBreakTime(time);
            }}
          >
            {time}m
          </button>
        ))}
      </div>
    </div>
  );
};

export default BreakTimes;
