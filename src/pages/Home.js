import React from "react";
import { GiAbstract003 } from "react-icons/gi";
import ActivityCard from "../components/ActivityCard";
import Question from "../components/Question";
import Sidebar from "../components/Sidebar";
import { activities } from "../Database/Data";
const Home = () => {
  return (
    <section className="grid lg:grid-cols-4 grid-cols-1">
      <div className="lg:col-span-3 w-full">
        <div className="container py-10">
          <div className="py-5">
            <div className="flex gap-2 items-center">
              <span>
                <GiAbstract003 size="28" color="#7B00F7" />
              </span>
              <h1 className="font-bold uppercase text-2xl text-violet-700">
                Programmer Daily Activity
              </h1>
            </div>
            <h3 className="text-gray-400 text-xl uppercase mt-7 font-semibold">
              Select today's activity
            </h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 my-5">
            {activities.map((activity) => (
              <ActivityCard {...activity} key={activity.id} />
            ))}
          </div>
          <Question />
        </div>
      </div>
      <div className="lg:col-span-1 w-full">
        <div className=" py-10">
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export default Home;
