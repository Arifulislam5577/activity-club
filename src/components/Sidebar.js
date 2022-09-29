import React, { useState } from "react";
import ActivityComplete from "./ActivityComplete";
import BreakDetails from "./BreakDetails";
import BreakTimes from "./BreakTimes";
import Profile from "./Profile";
import TimeCount from "./TimeCount";

const Sidebar = ({ totalTime }) => {
  const getBreakTimeFromStorage = localStorage.getItem("breakTime")
    ? JSON.parse(localStorage.getItem("breakTime"))
    : 0;
  const [breakTime, setBreakTime] = useState(getBreakTimeFromStorage);

  const handleBreakTime = (time) => {
    setBreakTime(time);
  };
  localStorage.setItem("breakTime", JSON.stringify(breakTime));
  return (
    <div className="p-14 lg:p-5">
      <Profile />
      <BreakTimes handleBreakTime={handleBreakTime} />
      <TimeCount totalTime={totalTime} />
      <BreakDetails breakTime={breakTime} />
      <ActivityComplete />
    </div>
  );
};

export default Sidebar;
