import {
  AppBar,
  Toolbar,
  styled,
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import React from "react";

import useState from "react";

import MenuIcon from "@mui/icons-material/Menu";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "white",
});

const NavRightBar = styled(Box)({
  display: "flex",
  justifyContent: "space-even",
});

export const Navbar = () => {
  const [category, setCategory] = useState();
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <MenuIcon sx={{ color: "black" }} />
        <NavRightBar>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </NavRightBar>
      </StyledToolbar>
    </AppBar>
  );
};
