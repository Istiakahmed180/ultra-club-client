import React from "react";

const Club = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3">
        <div className="flex items-center text-2xl">
          <img
            src="https://image.shutterstock.com/image-vector/gym-fitness-emblem-labels-badges-260nw-450881440.jpg"
            alt=""
            className="w-10"
          />
          <span className="text-[#5D5FEF] font-semibold ml-1">
            FITNESS AND EXERCISE CLUB
          </span>
        </div>
        <span className="font-medium text-[1.35rem]">
          Select Exercise Equipments
        </span>
      </div>

      <div className="text-2xl">
        <h1>Equipment List</h1>
      </div>
    </div>
  );
};

export default Club;
