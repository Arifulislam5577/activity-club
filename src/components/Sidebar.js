import React from "react";
import ActivityComplete from "./ActivityComplete";
import BreakDetails from "./BreakDetails";
import BreakTimes from "./BreakTimes";
import Profile from "./Profile";
import TimeCount from "./TimeCount";

const Sidebar = ({ totalTime }) => {
  return (
    <div className="p-5 ">
      <Profile />
      <BreakTimes />
      <TimeCount totalTime={totalTime} />
      <BreakDetails />
      <ActivityComplete />
    </div>
  );
};

export default Sidebar;
