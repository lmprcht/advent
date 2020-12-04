import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { StyledApp } from "./AppStyles";
import { createCalendar } from "./helpers";
import Door from "./door";

const GlobalStyle = createGlobalStyle`
  body {
    background: center / cover url("./img/calendar_backdrop.jpg");
    margin: 0;
  }
`;

function App() {
  const [doors, setDoors] = useState([]);

  useEffect(() => {
    // Could use if statements instead off course
    const calendar = localStorage.calendar
      ? JSON.parse(localStorage.calendar)
      : createCalendar();

    setDoors(calendar);
  }, []);

  // Store calendar in localStorage
  useEffect(() => {
    // Could use if statements instead off course
    doors.length && localStorage.setItem("calendar", JSON.stringify(doors));
  }, [doors]);

  const handleFlipDoor = id => {
    const updatedDoors = doors.map(door =>
      door.id === id ? { ...door, open: !door.open } : door
    );
    setHatches(updatedDoors);
  };

  return (
    <>
      <GlobalStyle />
      <StyledApp>
        {doors.map(door => (
          <Door
            key={door.id}
            doorData={door}
            handleClick={handleFlipDoor}
          />
        ))}
      </StyledApp>
    </>
  );
}

export default App;