import React from "react";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src="https://rukminim1.flixcart.com/image/612/612/l0mr7gw0/ethnic-set/e/r/w/m-palazoo-set-kenix-world-original-imagcdtgpszm7cdy.jpeg?q=70"
          alt=""
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">Brand Name</p>
          <p>Dress Type </p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">₹599/-</p>
          <p className="line-through opacity-50">₹1999</p>
          <p className="text-green-500 font-semibold">70% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
