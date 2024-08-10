import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductDetailsCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: "56", height: "56", bgcolor: "#9155fd" }}
            >
              M
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-lg">Manish</p>
              <p className="opacity-70">August 06 , 2024</p>
            </div>
          </div>
          <Rating value={4.5} name="half-rating" readOnly precision={0.5} />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
            tenetur!
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetailsCard;