import React from "react";

const Product = ({ product, handleAddToButton }) => {
  const { img, brandName, discription, weight, price, time } = product;
  return (
    <div className="mx-auto mt-10">
      <div className="card w-72 bg-base-100 shadow-xl">
        <figure>
          <img className="w-[288px] h-[192px]" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brandName}</h2>
          <p>{discription ? discription.slice(0, 45) + "..." : ""}</p>
          <p className="font-medium">Weigth: {weight} kg</p>
          <p className="font-medium">Price: ${price}</p>
          <p className="font-medium">Time: {time} Min</p>
          <div className="card-actions justify-center">
            <button
              onClick={() => handleAddToButton(product)}
              className="btn btn-primary rounded-2xl px-20"
            >
              Add To List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
