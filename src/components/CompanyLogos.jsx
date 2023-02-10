import { Box, styled } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import airbnb from "./assests/airbnb-original.png";

import amazon from "./assests/amazon-original.png";

import fitbit from "./assests/fitbit-original.png";

import google from "./assests/google-original.png";

import hubspot from "./assests/hubspot-original.png";

import mapbox from "./assests/mapbox-original.png";

import netflix from "./assests/netflix-original.png";

import paypal from "./assests/paypal-original.png";

import slack from "./assests/slack-original.png";

const ImageContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  marginTop: "100px",
  justifyContent: "center",
  alignItems: "center",
  flexWrap:"wrap"
});

const ImageFirstContainer = styled(Box)({
  display: "flex",
  gap: "40px",
  paddingLeft: "10px",
  flexWrap:"wrap"
});

const ImageSecondContainer = styled(Box)({
  display: "flex",
  gap: "40px",
  paddingLeft: "50px",
  marginTop: "20px",
  flexWrap:"wrap"
});

const useStyles = makeStyles((theme) => ({
  root: {
    height: 35,
    filter: "grayscale(100%)",
  },
}));
export const CompanyLogos = () => {
  const classes = useStyles();
  return (
    <ImageContainer>
      <ImageFirstContainer>
        <img
          src={airbnb}
          sx={{ color: "black" }}
          alt="airbnb"
          className={classes.root}
        />
        <img src={amazon} alt="amazon" className={classes.root} />
        <img src={fitbit} alt="fitbit" className={classes.root} />
        <img src={google} alt="google" className={classes.root} />
        <img src={hubspot} alt="hubspot" className={classes.root} />
      </ImageFirstContainer>
      <ImageSecondContainer>
        <img src={mapbox} alt="mapbox" className={classes.root} />
        <img src={netflix} alt="netflix" className={classes.root} />
        <img src={paypal} alt="paypal" className={classes.root} />
        <img src={slack} alt="slack" className={classes.root} />
      </ImageSecondContainer>
    </ImageContainer>
  );
};
