import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  Button,
} from "@mui/material";
import React from "react";

import MenuIcon from "@mui/icons-material/Menu";

import DarkModeIcon from "@mui/icons-material/DarkMode";

import ColorRadioButton from "./ColorRadioButton";
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
});

function NavbarNew() {
  return (
    <AppBar>
      <StyledToolbar>
        <MenuIcon sx={{ color: "black" }} />
        <NavRightBar>
          <ColorRadioButton />
          <DarkModeIcon sx={{ color: "black" }} />
          <Typography sx={{ color: "black" }} fontWeight={100} variant="h6">
            Home
          </Typography>
          <Typography sx={{ color: "black" }} fontWeight={100} variant="h6">
            Documentation
          </Typography>
          <Button sx={{ backgroundColor: "orange" }} variant="contained">
            Purchase Now
          </Button>
        </NavRightBar>
      </StyledToolbar>
    </AppBar>
  );
}

export default NavbarNew;
