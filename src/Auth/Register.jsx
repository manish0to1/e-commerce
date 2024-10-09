import { Grid, TextField } from "@mui/material";
import React from "react";

const Register = () => {
  const handleSubmit = () => {};

  return (
    <div>
      # Register Form Component
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
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
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email here"
              fullWidth
              autoComplete="email"
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Register;
