import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import myImg from "../../image/IMG_20201105_122048.jpg";

const ProductList = () => {
  return (
    <div className="">
      <div className="flex justify-center mt-2">
        <div className="avatar">
          <div className="w-16 rounded-full">
            <img src={myImg} alt="" />
          </div>
        </div>
        <div className="ml-2">
          <span className="text-2xl font-semibold">Istiak Ahmed</span>

          <span className="flex items-center">
            <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>{" "}
            <p className="ml-2">Ruppur, Ishwardi, Rajshahi</p>
          </span>
        </div>
      </div>

      <div className="stats stats-vertical lg:stats-horizontal shadow-2xl bg-[#F2F4FA] ml-3 mt-3">
        <div className="stat">
          <div className="stat-title">Weight</div>
          <div className="stat-value">67K</div>
        </div>

        <div className="stat">
          <div className="stat-title">Height</div>
          <div className="stat-value">6.2</div>
        </div>

        <div className="stat">
          <div className="stat-title">Age</div>
          <div className="stat-value">22</div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
