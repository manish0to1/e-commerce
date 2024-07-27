import React from "react";

const HomeSectionCard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
      <div className="h-[13] w-[10rem] ">
        <img
          className="object-cover object-top w-full h-full"
          src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/j/a/r/l-poch521835-peter-england-original-imag7jg47g7cxhg3-bb.jpeg?q=70"
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">Nofilter</h3>
        <p className="mt-2 text-sm text-gray-500">Men Solid Pure Cotton Straight Kurta</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
