import React from "react";
import AddressCard from "../AdderessCard/AddressCard";
import OrderTracking from "./OrderTracking";
import { Grid } from "@mui/material";

const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-5">delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-3">
        <OrderTracking activeStep={3} />
      </div>

      <Grid className="space-x-5" container>
        <Grid
          item
          container
          className="shadow-xl rounded-md p-5 border"
          sx={{ alignContent: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div>
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/g/6/k/m-sksh-dt1105-pcbl-fubar-original-imafux247zhqym2z-bb.jpeg?q=70"
                alt=""
              />
              <div className="space-y-2 ml-5">
                <p>title</p>
                <p className="space-x-5">
                  <span>Size : M </span>
                  <span>Color : color</span>
                </p>
                <p>eller</p>
                <p>Price</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderDetails;
