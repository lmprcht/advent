import React, {useEffect, useState} from "react";
import {createGlobalStyle} from "styled-components";
import Modal from 'simple-react-modal'
import {bgImages, createCalendar} from "./helpers";
import Door from "./door";
import Config from './config.json';
import {StyledApp} from "./AppStyles";
import useImagePreloader from "./useImagePreloader";

export const IS_DEV = window.location.href.match(/.*localhost.*/);

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
    overflow-y: scroll;
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
      font-size: 300%;
      color: white;
      font-family: 'Yatra One', sans-serif;
    }
  }
`;

function App() {
  const [doors, setDoors] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState(<p></p>);
  const {imagesPreloaded} = useImagePreloader(bgImages);

  useEffect(() => {
    const calendar = localStorage.calendar
      ? JSON.parse(localStorage.calendar)
      : createCalendar();

    const now = Date.now();
    for (let i = 0; i < calendar.length; i++) {
      const c = calendar[i];
      const date = new Date(2022, 11, c.id);

      const lifeData = Config.doors.find(d => d.id === c.id);

      if (lifeData === undefined) continue;

      // Keep content and author updated, in case, I change my mind ;)
      c.type = lifeData.type ?? 'text';
      c.content = lifeData.content ?? '';
      c.author = lifeData.author ?? '';

      // Close all doors, that should not be enabled due to the current date
      if (date.getTime() > now)
        c.open = false;

      calendar[i] = c;
    }

    if (IS_DEV)
      setDoors(createCalendar());
    else
      setDoors(calendar);
  }, []);

  // Store calendar in localStorage
  useEffect(() => {
    doors.length && localStorage.setItem("calendar", JSON.stringify(doors));
  }, [doors]);

  const handleFlipDoor = id => {
    const date = new Date(2022, 11, id);

    if (date.getTime() > Date.now() && !IS_DEV) {
      openModal(
        <div>
          <h2>Naa, du wirst doch wohl nicht...</h2>
          <p>Heute ist doch noch gar nicht der {id}. Dezember?!</p>
        </div>
      );

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
      <StyledApp>
        {imagesPreloaded && doors.map(door => (
          <Door
            key={door.id}
            doorData={door}
            handleClick={handleFlipDoor}
            handleFullscreenClick={openModal}
          />
        ))}
      </StyledApp>
      <Modal
        show={modalShow}
        onClose={closeModal}
        style
        containerStyle={{
          maxWidth: "90vw",
          maxHeight: "80vh",
          width: "100%",
          height: "100%",
          margin: "10vh auto",
          padding: 0,
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            height: 60,
            lineHeight: "60px",
            width: 60,
            borderRadius: "100%",
            background: "rgba(255, 255, 255, .5)",
            fontSize: "2em",
          }}
          onClick={closeModal}
        >
          X
        </span>
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