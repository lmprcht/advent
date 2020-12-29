import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { StyledApp } from "./AppStyles";
import { createCalendar } from "./helpers";
import Door from "./door";
import Appbackground from "./img/calendar_backdrop.jpg"


const GlobalStyle = createGlobalStyle`
  body {
    background: center / cover url(${Appbackground});
    margin: 0;
  }
`;

function App() {
  const [doors, setDoors] = useState([]);

  useEffect(() => {
    
    const calendar = localStorage.calendar
      ? JSON.parse(localStorage.calendar)
      : createCalendar();

    setDoors(calendar);
  }, []);

  // Store calendar in localStorage
  useEffect(() => {
    
    doors.length && localStorage.setItem("calendar", JSON.stringify(doors));
  }, [doors]);

  const handleFlipDoor = id => {
    const updatedDoors = doors.map(door =>
      door.id === id ? { ...door, open: !door.open } : door
    );
    setDoors(updatedDoors);
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