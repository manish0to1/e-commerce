import { Grid } from "@mui/material";
import React from "react";

const OrderCard = () => {
  return (
    <div>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p>Product Desc</p>
              <p className="opacity-50 text-sm font-semibold">Size</p>
              <p className="opacity-50 text-sm font-semibold">Color</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹1999</p>
        </Grid>
        <Grid item xs={4}>
          <p>
            <span>Delivered on march 27</span>
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
