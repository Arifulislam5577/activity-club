import React from "react";

const TimeCount = () => {
  return (
    <div className="my-5">
      <h2 className="text-sm font-bold text-gray-500 uppercase">
        time details
      </h2>
      <div className="py-3 px-5 bg-gray-100 flex items-center justify-between my-3">
        <h2 className="text-sm text-gray-700 font-semibold">Time Spend</h2>
        <h2 className="text-sm text-gray-500">125 minutes</h2>
      </div>
    </div>
  );
};

export default TimeCount;
