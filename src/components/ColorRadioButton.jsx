import * as React from "react";
import Radio from "@mui/material/Radio";
import { blue, green, orange, pink } from "@mui/material/colors";
import { Box, styled } from "@mui/material";

const RadioButtons = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-even",
  backgroundColor: "#E0E0E0",
  borderRadius: theme.shape.borderRadius,
}));

export default function ColorRadioButton() {
  const [selectedValue, setSelectedValue] = React.useState("a");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "size-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <RadioButtons>
      <Radio
        {...controlProps("g")}
        size="small"
        sx={{
          "& .MuiSvgIcon-root": {
            fontSize: 20,
            color: green[800],
          },
          "&.Mui-checked": {
            color: green[600],
          },
        }}
      />
      <Radio
        {...controlProps("b")}
        size="small"
        sx={{
          "& .MuiSvgIcon-root": {
            fontSize: 20,
            color: blue[800],
          },
          "&.Mui-checked": {
            color: blue[600],
          },
        }}
      />
      <Radio
        {...controlProps("v")}
        size="small"
        sx={{
          "& .MuiSvgIcon-root": {
            fontSize: 20,
            color: blue[800],
          },
          "&.Mui-checked": {
            color: blue[600],
          },
        }}
      />
      <Radio
        {...controlProps("p")}
        size="small"
        sx={{
          "& .MuiSvgIcon-root": {
            fontSize: 20,
            color: pink[800],
          },
          "&.Mui-checked": {
            color: pink[600],
          },
        }}
      />
      <Radio
        {...controlProps("o")}
        size="small"
        sx={{
          "& .MuiSvgIcon-root": {
            fontSize: 20,
            color: orange[800],
          },
          "&.Mui-checked": {
            color: orange[600],
          },
        }}
      />
    </RadioButtons>
  );
}
