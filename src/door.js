import React from "react";
import { StyledDoor } from "./doorStyles";

const Door = ({ doorData: { id, nr, text, img, open }, handleClick }) => (
  <StyledDoor background={img} onClick={() => handleClick(id)}>
    <div className={open ? "front open" : "front"}>
      <p>{nr}</p>
    </div>
    <div className={open ? "back open" : "back"}>
      <p>{text}</p>
    </div>
  </StyledDoor>
);

export default Door;