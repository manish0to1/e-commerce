import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AdderessCard/AddressCard";

const DeliveryForm = () => {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          lg={5}
          className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 cursor-pointer">
            <AddressCard />
            <Button
              sx={{
                mt: 2,
                bgcolor: "RGB(145 85 253)",
                color: "white",
                "&:hover": { color: "black" },
                textTransform: "none",
              }}
              size="large"
              variant="contained"
            >
              Delivery Here
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="family-name"
                  />
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryForm;

// ######################### Original #################################
// import { Box, Button, Grid, TextField } from "@mui/material";
// import React from "react";
// import AddressCard from "../AdderessCard/AddressCard";

// const DeliveryForm = () => {
//   return (
//     <div>
//       <Grid container spacing={4}>
//         <Grid xs={12} lg={5} className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
//           <div className="p-5 py-7 cursor-pointer">
//             <AddressCard />
//             <Button
//               sx={{
//                 mt: 2,
//                 bgcolor: "RGB(145 85 253)",
//                 color: "white",
//                 "&:hover": { color: "black" },
//                 textTransform: "none",
//               }}
//               size="large"
//               variant="container"
//             >
//               Delivery Here
//             </Button>
//           </div>
//         </Grid>

//         <Grid item xs={12} lg={7}>
//           <Box className="border rounded-s-md shadow-md p-5">
//             <form>
//               <Grid container xs={12} sm={6}>
//                 <TextField
//                   required
//                   id="firstName"
//                   name="firstName"
//                   label="First Name"
//                   fullWidth
//                   autoComplete="given-name"
//                 />
//               </Grid>

//               <Grid container xs={12} sm={6}>
//                 <TextField
//                   required
//                   id="firstName"
//                   name="firstName"
//                   label="First Name"
//                   fullWidth
//                   autoComplete="given-name"
//                 />
//               </Grid>
//             </form>
//           </Box>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default DeliveryForm;
