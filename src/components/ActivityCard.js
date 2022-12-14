import React from "react";

const ActivityCard = (props) => {
  const { id, title, disciption, timeRequired, image, handleAddToList } = props;
  return (
    <div className="col-span-1 shadow rounded overflow-hidden bg-white">
      <img src={image} alt={title} className="md:h-36 w-full object-cover " />
      <div className="p-4 ">
        <h2 className="text-sm font-bold uppercase text-slate-900">{title}</h2>
        <p className="text-xs text-gray-600 my-3">
          {disciption.split(" ").slice(0, 10).join(" ")}
        </p>
        <h1 className="text-xs font-bold text-gray-500">
          Time Required <span className="text-slate-700">{timeRequired}</span>{" "}
          minutes
        </h1>
        <button
          className="mt-3 text-white rounded text-xs p-3 font-bold w-full bg-slate-900 hover:bg-slate-600 uppercase"
          onClick={() => handleAddToList(id)}
        >
          add to list
        </button>
      </div>
    </div>
  );
};

export default ActivityCard;
