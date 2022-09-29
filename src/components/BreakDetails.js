import React from "react";

const BreakDetails = ({ breakTime }) => {
  return (
    <div className="my-5">
      <h2 className="text-sm font-bold text-gray-500 uppercase">
        break details
      </h2>
      <div className="py-3 px-5 bg-gray-100 flex items-center justify-between my-3">
        <h2 className="text-sm text-gray-700 font-semibold">Break Time</h2>
        <h2 className="text-sm text-gray-500">{breakTime} minutes</h2>
      </div>
    </div>
  );
};

export default BreakDetails;
