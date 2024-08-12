import React from "react";
import AddressCard from "../AdderessCard/AddressCard";
import OrderTracking from "./OrderTracking";

const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-5">delivery Address</h1>
        <AddressCard />
      </div>
      <div>
        <OrderTracking activeStep={3} />
      </div>
    </div>
  );
};

export default OrderDetails;
