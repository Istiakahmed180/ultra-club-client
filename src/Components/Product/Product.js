import React from "react";

const Product = ({ product }) => {
  const { img } = product;
  return (
    <div className="mx-auto mt-10">
      <div className="card w-64 bg-base-100 shadow-xl">
        <figure>
          <img className="w-[256px] h-[170px]" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
