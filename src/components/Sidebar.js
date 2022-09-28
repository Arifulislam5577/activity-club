import React from "react";
import ActivityComplete from "./ActivityComplete";
import BreakDetails from "./BreakDetails";
import BreakTimes from "./BreakTimes";
import Profile from "./Profile";
import TimeCount from "./TimeCount";

const Sidebar = () => {
  return (
    <div className="p-5 bg-white">
      <Profile />
      <BreakTimes />
      <TimeCount />
      <BreakDetails />
      <ActivityComplete />
    </div>
  );
};

export default Sidebar;
