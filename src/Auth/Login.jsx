import { Button, Grid, TextField } from "@mui/material";
import React from "react";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const userData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    };

    console.log("userData", userData);
  };

  return (
    <div>
      # Login Form Component
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="name"
              name="name"
              label="Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="password"
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className="bg-[#9155FD] w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{ padding: ".8rem 0", bgcolor: "#9155FD" }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Login;
