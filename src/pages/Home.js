import React from "react";
import { GiAbstract003 } from "react-icons/gi";
import ActivityCard from "../components/ActivityCard";
import Question from "../components/Question";
import Sidebar from "../components/Sidebar";
import { activities } from "../Database/Data";
const Home = () => {
  return (
    <section>
      <div className=" lg:mr-[20rem]">
        <div className="container py-5">
          <div className="text-center lg:text-left py-10">
            <div className="flex gap-2 items-center justify-center lg:justify-start ">
              <span>
                <GiAbstract003 size="28" color="#7B00F7" />
              </span>
              <h1 className="font-bold uppercase md:text-2xl text-xl text-violet-700">
                Programmer Daily Activity
              </h1>
            </div>
            <h3 className="text-gray-400  uppercase mt-4 font-semibold">
              Select today's activity
            </h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 my-5">
            {activities.map((activity) => (
              <ActivityCard {...activity} key={activity.id} />
            ))}
          </div>
          <Question />
        </div>
      </div>
      <div className="bg-white fixed h-full right-0 top-0 w-[20rem] lg:block hidden">
        <Sidebar />
      </div>
      <div className=" bg-white lg:hidden block">
        <Sidebar />
      </div>
    </section>
  );
};

export default Home;
