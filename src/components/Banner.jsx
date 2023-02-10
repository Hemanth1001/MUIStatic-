import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Banner from "./assests/Main-banner.png";
import { Box, createTheme, styled, Typography } from "@material-ui/core";
import clsx from "clsx";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${Banner})`,
    backgroundSize: "cover",
    height: 600,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    filter: "brightness(35%)",
    padding: "10px",
  },
  typography: {
    fontFamily: "Roboto",
    fontSize: "25px",
  },
  whiteText: {
    color: "white",
  },
  greenText: {
    color: "chartreuse",
  },
  bold: {
    fontWeight: "bolder",
  },
  brightText: {
    textShadow: "0 0 10px white",
  },
}));
function BackgroundImage() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography
        variant="h3"
        className={clsx(classes.whiteText, classes.bold)}
      >
        You're in good
      </Typography>
      <Typography
        variant="h3"
        className={clsx(classes.whiteText, classes.bold, classes.brightText)}
      >
        Company
      </Typography>
      <Typography
        variant="h3"
        className={clsx(classes.greenText, classes.bold, classes.brightText)}
      >
        Joins millions of
      </Typography>
      <Typography
        variant="h3"
        className={clsx(classes.greenText, classes.bold, classes.brightText)}
      >
        bussiness Today
      </Typography>
    </Paper>
  );
}

export default BackgroundImage;
