import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@mui/icons-material/Menu";
import ColorRadioButton from "./ColorRadioButton";

//import Logo from "./assests/New.PNG";

import NewIcon from "./assests/Icon.png";

import DarkModeIcon from "@mui/icons-material/DarkModeOutlined";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "white",
});

const NavRightBar = styled(Box)({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  marginLeft: "5px",
  gap: "10px",
});

const NavLeftBar = styled(Box)({
  display: "flex",
  justifyContent: "space-even",
  alignItems: "center",
  gap: "20px",
});

const useStyles = makeStyles({
  redText: {
    color: "red",
  },
});

function NavbarNew() {
  const classes = useStyles();
  return (
    <AppBar>
      <StyledToolbar>
        <NavLeftBar>
          <MenuIcon sx={{ color: "black" }} />
          <img src={NewIcon} sx={{ width: "5%" }} alt="icon" />
        </NavLeftBar>
        <NavRightBar>
          <ColorRadioButton />
          <DarkModeIcon sx={{ color: "green" }} />
          <Typography sx={{ color: "black" }} fontWeight={100} variant="h6">
            Home
          </Typography>
          <Typography sx={{ color: "black" }} fontWeight={100} variant="h6">
            Documentation
          </Typography>
          <Button sx={{ backgroundColor: "green" }} variant="contained">
            Purchase Now
          </Button>
        </NavRightBar>
      </StyledToolbar>
    </AppBar>
  );
}

export default NavbarNew;
