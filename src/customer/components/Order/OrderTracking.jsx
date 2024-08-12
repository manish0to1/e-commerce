import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

const steps = [
  "Order Confirmed",
  "Placed",
  "Shipped",
  "Ou for Delivery",
  "Delivered",
];

const OrderTracking = ({ activeStep }) => {
  return (
    <div className="w-full">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step>
            <StepLabel sx={{ color: "#9155FD", font: "40px" }}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default OrderTracking;
