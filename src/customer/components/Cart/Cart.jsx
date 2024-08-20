import React from "react";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2 space-y-8">
          {[1, 1, 1].map((item) => (
            <CartItem />
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border ">
            <p className="font-bold opacity-60 pb-4">Price Details</p>
            <hr />

            <div className="space-y-3 font-semibold p-5">
              <div className="flex justify-between text-black pt-4">
                <span>Price</span>
                <span>₹4697</span>
              </div>

              <div className="flex justify-between text-black pt-4">
                <span>Discount</span>
                <span className="text-green-500">-₹3419</span>
              </div>

              <div className="flex justify-between text-black pt-4">
                <span>Delivery Charge</span>
                <span className="text-green-500">Free</span>
              </div>
              <hr />
              <div className="flex justify-between text-black pt-4 font-bold">
                <span>Total Amount</span>
                <span className="text-green-500">₹1278</span>
              </div>
            </div>
            <button
              variant="contained"
              className="w-full px-2.5rem py-2 flex  justify-center items-center rounded-md border border-transparent bg-indigo-600 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
 
export default Cart;
