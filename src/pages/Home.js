import React from "react";
import { GiAbstract003 } from "react-icons/gi";
import { activities } from "../Database/Data";
const Home = () => {
  return (
    <section className="grid lg:grid-cols-4 grid-cols-1 gap-5">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {activities.map((activity) => (
              <div
                className="col-span-1 shadow rounded-md overflow-hidden"
                key={activity.id}
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="md:h-32 h-44 w-full object-cover"
                />
                <div className="p-4">
                  <h2 className="text-sm font-bold uppercase text-slate-900">
                    {activity.title}
                  </h2>
                  <p className="text-xs text-gray-600 my-3">
                    {activity.disciption.split(" ").slice(0, 10).join(" ")}
                  </p>
                  <h1 className="text-xs font-bold text-gray-500">
                    Time Required{" "}
                    <span className="text-slate-700">
                      {activity.timeRequired}
                    </span>{" "}
                    minutes
                  </h1>
                  <button className="mt-3 text-white rounded text-xs p-3 font-bold w-full bg-slate-900 hover:bg-slate-600 uppercase">
                    add to list
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-1 bg-orange-500 p-5"></div>
    </section>
  );
};

export default Home;
