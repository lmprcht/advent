import React, {useEffect, useState} from "react";
import {createGlobalStyle} from "styled-components";
import Modal from 'simple-react-modal'
import {StyledApp} from "./AppStyles";
import {createCalendar} from "./helpers";
import Door from "./door";
import Config from './config.json';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 1.13em;
  }

  html, body {
    min-height: 100%;
  }
  
  @keyframes gradient-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  
  body {
    margin: 0;
   
    &:before {
      content: "";
      display: block;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      opacity: .8;
      background: linear-gradient(300deg,deepskyblue,darkviolet,blue);
      background-size: 180% 180%;
      animation: gradient-animation 10s ease infinite;
    }
  }
  
  header {
    display: flex,
    align-items: center;
    justify-content: center;
    text-align: center;
    
    h1 {
      font-size: 4em;
      color: white;
      font-family: 'Yatra One', sans-serif;
    }
  }
`;

function App() {
  const [doors, setDoors] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState(<p></p>);

  useEffect(() => {
    const calendar = localStorage.calendar
      ? JSON.parse(localStorage.calendar)
      : createCalendar();

    for (let i = 0; i < calendar.length; i++)
    {
      const c = calendar[i];

      // Keep text and author updated, in case, I change my mind ;)
      c.type = Config.doors[i]?.type ?? 'text';
      c.content = Config.doors[i]?.content ?? '';
      c.author = Config.doors[i]?.author ?? '';

      calendar[i] = c;
    }

    //setDoors(calendar);
    setDoors(createCalendar());
  }, []);

  // Store calendar in localStorage
  useEffect(() => {
    doors.length && localStorage.setItem("calendar", JSON.stringify(doors));
  }, [doors]);

  const handleFlipDoor = id => {
    const date = new Date(2021, 11, id);

    if (date.getTime() > Date.now()) {
      console.log(date.toString());

      return;
    }

    const updatedDoors = doors.map(door =>
      door.id === id ? {...door, open: !door.open} : door
    );

    setDoors(updatedDoors);
  };

  const openModal = (content) => {
    setModalContent(content);

    setModalShow(true);
  };

  const closeModal = () => setModalShow(false);

  return (
    <>
      <GlobalStyle/>
      <header>
        <h1>Feminist Advent Calendar</h1>
      </header>
      <div style={{
        display: "grid",
        gridGap: 20,
        gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
        padding: 40,
      }}>
        {doors.map(door => (
          <Door
            key={door.id}
            doorData={door}
            handleClick={handleFlipDoor}
            handleFullscreenClick={openModal}
          />
        ))}
      </div>
      <Modal
        show={modalShow}
        onClose={closeModal}
        style
        containerStyle={{
          maxWidth: "90vw",
          maxHeight: "90vh",
          width: "100%",
          height: "100%",
          margin: "5vh auto",
          padding: 0,
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <div style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          {modalContent}
        </div>
      </Modal>
    </>
  );
}

export default App;