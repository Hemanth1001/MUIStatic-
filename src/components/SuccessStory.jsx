import { Typography, styled, Box } from "@mui/material";
import React from "react";

const SuccessContainer = styled(Box)({
  display: "flex",
  gap: "15px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "50px",
  flexWrap:"wrap"
});

export const SuccessStory = () => {
  return (
    <SuccessContainer>
      <Typography variant="h6" sx={{color:"orange"}} >SUCCESS STORY</Typography>
      <Typography variant="h2">
        See how we are helping teams and bussiness
      </Typography>
    </SuccessContainer>
  );
};
