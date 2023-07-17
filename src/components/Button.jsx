import React from "react";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function Button(props) {
  return (
    <Zoom in={true}>
      <Fab type={props.type} onClick={props.onClick}>
        {props.text}
      </Fab>
    </Zoom>
  );
}

export default Button;
