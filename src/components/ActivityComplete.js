import React from "react";
import { toast } from "react-toastify";
const ActivityComplete = () => {
  const notify = () => toast.success("Activity Complete Successfully");
  return (
    <div className="my-5">
      <button
        className="w-full p-3 capitalize bg-slate-900 rounded text-white"
        onClick={notify}
      >
        activity complete
      </button>
    </div>
  );
};

export default ActivityComplete;
