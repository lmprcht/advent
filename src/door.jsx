import React, {useLayoutEffect, useRef, useState} from "react";
import {StyledDoor} from "./doorStyles";

const DoorContent = ({type, content, author, innerRef, style, readAllClick}) => {
  const containerStyles = {
    ...style,
    margin: "auto",
  };

  if (type === "image") {
    containerStyles.width = "100%";
    containerStyles.height = "100%";
  } else if (type === "text") {
    containerStyles.maxWidth = "90%";
  }

  let readAllButton = "";

  if (type === "text" && style?.maxHeight !== undefined && style?.maxHeight !== "none")
    readAllButton = <div onClick={readAllClick} className="readAll">Weiterlesen</div>;

  return (
    <div ref={innerRef} style={containerStyles} className="content">
      {type === "image" ?
        <img style={{width: "100%", height: "100%", objectFit: "contain"}} src={require(`./img/${content}`)}
             alt=""/> : ""}
      {type === "text" ? <p>{content}</p> : ""}

      {readAllButton}

      {author && (
        <div className="author">
          {author}
        </div>
      )}
    </div>
  );
}

export default ({doorData: {id, bg, type, content, author, open}, handleClick, handleFullscreenClick}) => {
  const [contentStyle, setContentStyle] = useState({maxHeight: "none"});
  const doorNode = useRef();
  const contentNode = useRef();

  useLayoutEffect(() => {
    const {current: currentDoor} = doorNode;
    const {current: currenContent} = contentNode;

    if (!currentDoor || !currenContent) return;

    if (currenContent.offsetHeight > currentDoor.offsetHeight - 30) {
      setContentStyle({
        maxHeight: doorNode.current?.offsetHeight - 120,
      });
    } else {
      setContentStyle({maxHeight: "none"});
    }
  }, [doorNode, contentNode])

  const handleFullscreen = (e) => {
    e.stopPropagation();

    // Copy content block into modal
    handleFullscreenClick(<DoorContent type={type} content={content} author={author}/>);
  };

  return (
    <StyledDoor ref={doorNode} background={bg} onClick={() => handleClick(id)}>
      <div className={open ? "front open" : "front"}>
        <p>{id}</p>
      </div>
      <div className={open ? "back open" : "back"}>
        <span style={{position: "absolute", top: 20, left: 20}}>{id}</span>
        <i className="fullscreen" onClick={handleFullscreen}></i>
        <DoorContent style={contentStyle} innerRef={contentNode} type={type} content={content} author={author}
                     readAllClick={handleFullscreen}/>
      </div>
    </StyledDoor>
  );
};
