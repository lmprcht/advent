import React from "react";
import {StyledDoor} from "./doorStyles";

const DoorContent = ({type, content, author}) => {
  return (
    <div style={{width: "100%", height: "100%", margin: "auto"}} className="content">
      {type === "image" ?
        <img style={{width: "100%", height: "100%", objectFit: "contain"}} src={require(`./img/${content}`)}
             alt=""/> : ""}
      {type === "text" ? <p>{content}</p> : ""}

      {author && (
        <div className="author">
          {author}
        </div>
      )}
    </div>
  );
}

export default ({doorData: {id, bg, type, content, author, open}, handleClick, handleFullscreenClick}) => {
  const handleFullscreen = (e) => {
    e.stopPropagation();

    // Copy content block into modal
    handleFullscreenClick(<DoorContent type={type} content={content} author={author}/>);
  };

  return (
    <StyledDoor background={bg} onClick={() => handleClick(id)}>
      <div className={open ? "front open" : "front"}>
        <p>{id}</p>
      </div>
      <div className={open ? "back open" : "back"}>
        <span style={{position: "absolute", top: 20, left: 20}}>{id}</span>
        <i className="fullscreen" onClick={handleFullscreen}></i>
        <DoorContent type={type} content={content} author={author}/>
      </div>
    </StyledDoor>
  );
};