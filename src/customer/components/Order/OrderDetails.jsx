import React from "react";
import AddressCard from "../AdderessCard/AddressCard";
import OrderTracking from "./OrderTracking";
import { Box, Grid } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-5">Delivery Address</h1>
        <AddressCard />
      </div>

      <div className="py-3">
        <OrderTracking activeStep={3} />
      </div>

      <Grid container spacing={2} className="space-y-5 py-5">
        {[1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-5">
                <img
                  className="w-[6rem] h-[6rem] object-cover object-top"
                  src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/g/6/k/m-sksh-dt1105-pcbl-fubar-original-imafux247zhqym2z-bb.jpeg?q=70"
                  alt=""
                />
                <div className="space-y-2 ml-5">
                  <p className="font-semibold">Title</p>
                  <p className="space-x-5 text-xs font-semibold opacity-50">
                    <span>Size : M</span>
                    <span>Color : color</span>
                  </p>
                  <p>Seller</p>
                  <p>Price</p>
                </div>
              </div>
            </Grid>
            {/* ################## Rating Grid ################# */}
            <Grid item>
              <Box sx={{ color: "blue" }}>
                <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2" />
                <span>Rate & Reviews</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;

// import React from "react";
// import AddressCard from "../AdderessCard/AddressCard";
// import OrderTracking from "./OrderTracking";
// import { Box, Grid } from "@mui/material";
// import StarIcon from "@mui/icons-material/Star";

// const OrderDetails = () => {
//   return (
//     <div className="px:5 lg:px-20">
//       <div>
//         <h1 className="font-bold text-xl py-5">delivery Address</h1>
//         <AddressCard />
//       </div>
//       <div className="py-3">
//         <OrderTracking activeStep={3} />
//       </div>

//       <Grid className="space-x-5" container>
//         <Grid
//           item
//           container
//           className="shadow-xl rounded-md p-5 border"
//           sx={{ alignContent: "center", justifyContent: "space-between" }}
//         >
//           <Grid item xs={6}>
//             <div>
//               <img
//                 className="w-[5rem] h-[5rem] object-cover object-top"
//                 src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/g/6/k/m-sksh-dt1105-pcbl-fubar-original-imafux247zhqym2z-bb.jpeg?q=70"
//                 alt=""
//               />
//               <div className="space-y-2 ml-5">
//                 <p>title</p>
//                 <p className="space-x-5">
//                   <span>Size : M </span>
//                   <span>Color : color</span>
//                 </p>
//                 <p>Seller</p>
//                 <p>Price</p>
//               </div>
//             </div>
//           </Grid>

//           {/* ################## Rating Grid ################# */}
//           <Grid item>

//             <Box sx={{ color: "blue" }}>
//               <StarIcon fontSize={2} className="px-2 text-5xl " />
//               <span>Rate & Reviews</span>
//             </Box>
//           </Grid>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default OrderDetails;
