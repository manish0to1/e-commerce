import React from "react";
import { Button, Grid, Typography, Link } from "@mui/material";
// import { Link } from "react-alice-carousel";
 
const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6" gutterBottom>
            Company
          </Typography>
          <div>
            <Button
              className="pb-5"
              color="inherit"
              sx={{ textTransform: "none" }}
            >
              About
            </Button>
          </div>
          <div>
            <Button
              className="pb-5"
              color="inherit"
              sx={{ textTransform: "none" }}
            >
              Blog
            </Button>
          </div>
          <div>
            <Button
              className="pb-5"
              color="inherit"
              sx={{ textTransform: "none" }}
            >
              Press
            </Button>
          </div>
          <div>
            <Button
              className="pb-5"
              color="inherit"
              sx={{ textTransform: "none" }}
            >
              Jobs
            </Button>
          </div>
          <div>
            <Button
              className="pb-5"
              color="inherit"
              sx={{ textTransform: "none" }}
            >
              Partners
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6" gutterBottom>
            Solutions
          </Typography>
          <div>
            <Button
              className="pb-5"
              color="inherit"
              sx={{ textTransform: "none" }}
            >
              Marketing
            </Button>
          </div>
          <div>
            <Button
              className="pb-5"
              color="inherit"
              sx={{ textTransform: "none" }}
            >
              Analytics
            </Button>
          </div>
          <div>
            <Button
              className="pb-5"
              color="inherit"
              sx={{ textTransform: "none" }}
            >
              Commerce
            </Button>
          </div>
          <div>
            <Button
              className="pb-5"
              color="inherit"
              sx={{ textTransform: "none" }}
            >
              Insights
            </Button>
          </div>
          <div>
            <Button
              className="pb-5"
              color="inherit"
              sx={{ textTransform: "none" }}
            >
              Support
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6" gutterBottom>
            Documentation
          </Typography>
          <div>
            <Button
              className="pb-5"
              color="inherit"
              sx={{ textTransform: "none" }}
            >
              Guidelines
            </Button>
          </div>
          <div>
            <Button
              className="pb-5"
              color="inherit"
              sx={{ textTransform: "none" }}
            >
              API Status
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6" gutterBottom>
            Legal
          </Typography>
          <div>
            <Button
              className="pb-5"
              color="inherit"
              sx={{ textTransform: "none" }}
            >
              Claim
            </Button>
          </div>
          <div>
            <Button
              className="pb-5"
              color="inherit"
              sx={{ textTransform: "none" }}
            >
              Privacy
            </Button>
          </div>
          <div>
            <Button
              className="pb-5"
              color="inherit"
              sx={{ textTransform: "none" }}
            >
              Terms & Conditions
            </Button>
          </div>
        </Grid>

        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2024 | All rights reserved by Manish.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made with love by me..😁.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Icons made by{" "}
            <Link
              href="https://www.freepik.com/"
              target="_blank"
              color="inherit"
              underline="always"
            >
              # freepik
            </Link>{" "}
            from{" "}
            <Link
              href="https://www.flaticon.com/"
              target="_blank"
              color="inherit"
              underline="always"
            >
              # flaticon
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
