import React from "react";
import { MdLocationOn } from "react-icons/md";
const Profile = () => {
  return (
    <>
      <div className="flex items-center gap-2">
        <img
          src="images/office.jpg"
          alt="profile"
          className="h-14 w-14 rounded-full   border-2 border-white"
        />
        <div>
          <h2 className="font-bold uppercase text-sm mb-1">Md Ariful Islam</h2>
          <div className="flex items-center text-xs text-gray-600">
            <span>
              <MdLocationOn />
            </span>
            <span>Dhaka,Bangladesh</span>
          </div>
        </div>
      </div>
      <div className="my-3 py-2 px-5 bg-gray-100 rounded flex items-center justify-between ">
        <div className="text-center">
          <h2 className="font-semibold mb-1">
            70<span className="text-xs text-gray-400">kg</span>
          </h2>
          <h4 className="text-xs text-gray-400">Weight</h4>
        </div>
        <div className="text-center">
          <h2 className="font-semibold mb-1">5.6</h2>
          <h4 className="text-xs text-gray-400">Height</h4>
        </div>
        <div className="text-center">
          <h2 className="font-semibold mb-1">
            21<span className="text-xs text-gray-400">yrs</span>
          </h2>
          <h4 className="text-xs text-gray-400">Age</h4>
        </div>
      </div>
    </>
  );
};

export default Profile;
