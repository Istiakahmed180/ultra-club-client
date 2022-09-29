import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import myImg from "../../image/IMG_20201105_122048.jpg";

const ProductList = ({ list }) => {
  const [breaks, setBreaks] = useState("");
  let time = 0;
  for (const product of list) {
    time = time + parseInt(product.time);
  }

  const handleBreakButton = (e) => {
    setBreaks(e);
  };

  const notify = () => toast("Wow Congratulations Activity Complete!");

  return (
    <div className="sticky top-0 lg:px-0 px-8 ">
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

      <div className="stats stats-horizpntal lg:stats-horizontal shadow-2xl bg-[#F2F4FA] ml-3 mt-6 mb-10">
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

      <div className="ml-3">
        <span className="font-semibold text-xl ">Add To Break</span>
        <div className="tabs mt-6 shadow-2xl">
          <button
            onClick={(e) => handleBreakButton(e.target.value)}
            className="tab tab-lifted"
            value="10"
          >
            10m
          </button>
          <button
            onClick={(e) => handleBreakButton(e.target.value)}
            className="tab tab-lifted tab-active"
            value="20"
          >
            20m
          </button>
          <button
            onClick={(e) => handleBreakButton(e.target.value)}
            className="tab tab-lifted"
            value="30"
          >
            30m
          </button>
          <button
            onClick={(e) => handleBreakButton(e.target.value)}
            className="tab tab-lifted tab-active"
            value="40"
          >
            40m
          </button>
          <button
            onClick={(e) => handleBreakButton(e.target.value)}
            className="tab tab-lifted"
            value="50"
          >
            50m
          </button>
        </div>
      </div>

      <div className="mt-8 ml-3">
        <span className="font-semibold text-xl">Excercise Details</span>
        <div className=" flex justify-between px-4 rounded-2xl mr-2 py-4 mt-6 bg-[#F2F4FA]">
          <span className="font-medium text-lg">Exercise Time</span>
          <span>{time} Minitues</span>
        </div>
        <div className=" flex justify-between px-4 rounded-2xl mr-2 py-4 mt-6 bg-[#F2F4FA]">
          <span className="font-medium text-lg">Break Time</span>
          <span>{breaks} Minitues</span>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={notify} className="btn btn-primary rounded-2xl px-20 ">
          Activity Complete
        </button>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default ProductList;
