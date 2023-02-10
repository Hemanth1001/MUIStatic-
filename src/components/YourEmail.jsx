import { Button, TextField, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";

const EmailContainer = styled(Box)({
  display: "flex",
  gap: "30px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "50px",
  flexWrap: "wrap",
  backgroundColor: "#E0E0E0",
  padding: "20px",
});

const ButtonContainer = styled(Box)({
  display: "flex",
  gap: "30px",
  justifyContent: "center",
  alignItems: "center",
});

export const YourEmail = () => {
  return (
    <EmailContainer>
      <Typography variant="h3">Ready to go you business?</Typography>
      <Typography variant="h6">
        Your website is full responsive so visitors can view your device from
        their choice of device
      </Typography>
      <ButtonContainer>
        <TextField
          id="outlined-basic"
          label="Enter your email"
          variant="outlined"
        />
        <Button sx={{ backgroundColor: "green", height: 55, color: "white" }}>
          Request a Demo
        </Button>
      </ButtonContainer>
    </EmailContainer>
  );
};
