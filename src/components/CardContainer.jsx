import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import { Box } from "@mui/material";
import { makeStyles, styled } from "@material-ui/core/styles";

//arrow Button
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

import FistImage from "./assests/FirstImage.jpg";

import SecondImage from "./assests/SecoundImage.jpeg";

import ThirdImage from "./assests/ThirdImage.jpeg";

import FourthImage from "./assests/FourthImage.jpeg";

import FifthImage from "./assests/FifthImage.jpg";

import SixthImage from "./assests/SixthImage.jpg";

import Sevanth from "./assests/Sevanth.jpeg";

//companyImages
import airbnb from "./assests/airbnb-original.png";

import amazon from "./assests/amazon-original.png";

import fitbit from "./assests/fitbit-original.png";

import google from "./assests/google-original.png";

import hubspot from "./assests/hubspot-original.png";

import mapbox from "./assests/mapbox-original.png";

import netflix from "./assests/netflix-original.png";

import paypal from "./assests/paypal-original.png";

import slack from "./assests/slack-original.png";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 35,
  },
}));

const ImageSecondContainer = styled(Box)({
  display: "flex",
  gap: "30px",
  flexdirection: "row",
  justifyContent: "center",
  flexWrap: "wrap",
  alignItems: "center",
  marginTop: "30px",
});

export const CardContainer = () => {
  const classes = useStyles();
  return (
    <ImageSecondContainer>
      {/* 1 */}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="teamMembers"
          height="200"
          image={require("./assests/SecoundImage.jpeg")}
        />
        <CardContent>
          <img src={airbnb} alt="airbnb" className={classes.root} />
          <Typography variant="body2" color="text.secondary">
            Unforgettable trips start with Airbnb. Find adventures nearby or in
            faraway places and access unique homes, experiences, and places
            around the world.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" sx={{ color: "green" }}>
            know more
          </Button>
          <TrendingFlatIcon sx={{ color: "green" }} />
        </CardActions>
      </Card>
      {/* 2 */}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="teamMembers"
          height="200"
          image={require("./assests/BannerImage.png")}
        />
        <CardContent>
          <img src={amazon} alt="amazon" className={classes.root} />
          <Typography variant="body2" color="text.secondary">
            Unforgettable trips start with Airbnb. Find adventures nearby or in
            faraway places and access unique homes, experiences, and places
            around the world.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" sx={{ color: "green" }}>
            know more
          </Button>
          <TrendingFlatIcon sx={{ color: "green" }} />
        </CardActions>
      </Card>

      {/* 3 */}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="teamMembers"
          height="200"
          image={require("./assests/ThirdImage.jpeg")}
        />
        <CardContent>
          <img src={fitbit} alt="fitbit" className={classes.root} />
          <Typography variant="body2" color="text.secondary">
            Unforgettable trips start with Airbnb. Find adventures nearby or in
            faraway places and access unique homes, experiences, and places
            around the world.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" sx={{ color: "green" }}>
            know more
          </Button>
          <TrendingFlatIcon sx={{ color: "green" }} />
        </CardActions>
      </Card>
      {/* 4*/}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="teamMembers"
          height="200"
          image={require("./assests/FourthImage.jpeg")}
        />
        <CardContent>
          <img src={google} alt="google" className={classes.root} />
          <Typography variant="body2" color="text.secondary">
            Unforgettable trips start with Airbnb. Find adventures nearby or in
            faraway places and access unique homes, experiences, and places
            around the world.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" sx={{ color: "green" }}>
            know more
          </Button>
          <TrendingFlatIcon sx={{ color: "green" }} />
        </CardActions>
      </Card>
      {/* 5*/}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="teamMembers"
          height="200"
          image={require("./assests/FifthImage.jpg")}
        />
        <CardContent>
          <img src={hubspot} alt="hubspot" className={classes.root} />
          <Typography variant="body2" color="text.secondary">
            Unforgettable trips start with Airbnb. Find adventures nearby or in
            faraway places and access unique homes, experiences, and places
            around the world.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" sx={{ color: "green" }}>
            know more
          </Button>
          <TrendingFlatIcon sx={{ color: "green" }} />
        </CardActions>
      </Card>
      {/* 6*/}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="teamMembers"
          height="200"
          image={require("./assests/SixthImage.jpg")}
        />
        <CardContent>
          <img src={mapbox} alt="mapbox" className={classes.root} />
          <Typography variant="body2" color="text.secondary">
            Unforgettable trips start with Airbnb. Find adventures nearby or in
            faraway places and access unique homes, experiences, and places
            around the world.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" sx={{ color: "green" }}>
            know more
          </Button>
          <TrendingFlatIcon sx={{ color: "green" }} />
        </CardActions>
      </Card>
      {/* 7 */}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="teamMembers"
          height="200"
          image={require("./assests/Sevanth.jpeg")}
        />
        <CardContent>
          <img src={netflix} alt="netflix" className={classes.root} />
          <Typography variant="body2" color="text.secondary">
            Unforgettable trips start with Airbnb. Find adventures nearby or in
            faraway places and access unique homes, experiences, and places
            around the world.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" sx={{ color: "green" }}>
            know more
          </Button>
          <TrendingFlatIcon sx={{ color: "green" }} />
        </CardActions>
      </Card>
      {/* 8 */}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="teamMembers"
          height="200"
          image={require("./assests/FifthImage.jpg")}
        />
        <CardContent>
          <img src={paypal} alt="paypal" className={classes.root} />
          <Typography variant="body2" color="text.secondary">
            Unforgettable trips start with Airbnb. Find adventures nearby or in
            faraway places and access unique homes, experiences, and places
            around the world.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" sx={{ color: "green" }}>
            know more
          </Button>
          <TrendingFlatIcon sx={{ color: "green" }} />
        </CardActions>
      </Card>
      {/* 9 */}

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="teamMembers"
          height="200"
          image={require("./assests/FirstImage.jpg")}
        />
        <CardContent>
          <img src={slack} alt="slack" className={classes.root} />
          <Typography variant="body2" color="text.secondary">
            Unforgettable trips start with Airbnb. Find adventures nearby or in
            faraway places and access unique homes, experiences, and places
            around the world.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" sx={{ color: "green" }}>
            know more
          </Button>
          <TrendingFlatIcon sx={{ color: "green" }} />
        </CardActions>
      </Card>
    </ImageSecondContainer>
  );
};
