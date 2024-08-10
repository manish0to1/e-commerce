import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AdderessCard/AddressCard";

const DeliveryForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      address: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zip: data.get("zip"),
      mobileNumber: data.get("mobileNumber"),
    };
    console.log("address", address);
  };

  return (
    <div>
      <Grid container spacing={4}>
        <Grid
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
              variant="container"
            >
              Delivery Here
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onClick={handleSubmit}>
              <Grid container spacing={2}>
                {/* first name */}
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
                {/* last name */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                {/* address */}
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    multiline
                    rows={4}
                  />
                </Grid>
                {/* city */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                  />
                </Grid>
                {/* state */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State"
                    fullWidth
                  />
                </Grid>
                {/* pin or zip number */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Pin Code"
                    fullWidth
                  />
                </Grid>
                {/* phone number */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="mobileNumber"
                    name="mobileNumber"
                    label="Contact Number"
                    fullWidth
                  />
                </Grid>
                {/* delivery here button  */}
                <Grid item xs={12} sm={6}>
                  <Button
                    sx={{
                      mt: 2,
                      bgcolor: "RGB(145 85 253)",
                      color: "white",
                      "&:hover": { color: "black" },
                      textTransform: "none",
                    }}
                    size="large"
                    variant="container"
                    type="submit"
                  >
                    Delivery Here
                  </Button>
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
