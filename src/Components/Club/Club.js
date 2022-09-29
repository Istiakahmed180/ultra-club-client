import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import ProductList from "../ProductList/ProductList";
import Questions from "../Questions/Questions";

const Club = () => {
  const [products, setProducts] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToButton = (product) => {
    setList([...list, product]);
  };
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1">
      <div className="col-span-3 bg-[#F2F4FA]">
        <div className="ml-10 mt-8">
          <div className="flex items-center text-2xl mb-4">
            <img
              src="https://image.shutterstock.com/image-vector/gym-fitness-emblem-labels-badges-260nw-450881440.jpg"
              alt=""
              className="w-10"
            />
            <span className="text-[#5D5FEF] font-semibold ml-1">
              FITNESS AND EXERCISE CLUB
            </span>
          </div>
          <span className="font-medium text-[1.35rem] lg:px-0 px-8">
            Select Exercise Equipments
          </span>
        </div>
        <div className="grid lg:grid-cols-3">
          {products.map((product) => (
            <Product
              product={product}
              key={product.id}
              handleAddToButton={handleAddToButton}
            ></Product>
          ))}
        </div>
        <Questions></Questions>
      </div>

      <div className="">
        <ProductList list={list}></ProductList>
      </div>
    </div>
  );
};

export default Club;
