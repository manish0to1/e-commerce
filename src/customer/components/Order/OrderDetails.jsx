import React from "react";
import AddressCard from "../AdderessCard/AddressCard";

const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20">
      <h1 className="font-bold text-xl py-5">delivery Address</h1>
      <AddressCard />
    </div>
  );
};

export default OrderDetails;
