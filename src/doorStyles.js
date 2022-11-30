import styled from "styled-components";
import doorBackdrop from "./img/feminism_symbol.svg";

export const StyledDoor = styled.div`
  padding-top: 100%;
  position: relative;
  cursor: pointer;
  color: #fff;

  .front {
    font-family: 'Yatra One', sans-serif;
    background: center / cover url(${props => props.background});
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Dancing Script", cursive;
      padding: 20px;
      width: 50%;
      height: 50%;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.7);
      font-weight: 700;
      font-size: 4rem;
    }
    
    &.open {
      transform: rotateY(180deg);
    }
  }
  
  .back {
    position: absolute;
    background: rgb(229, 109, 204);
    top: 0px;
    left: 0px;
    z-index: 1;
    transform: rotateY(180deg);
    
    &:before {
      content: "";
      position: absolute;
      top: 0; 
      left: 0;
      width: 100%; 
      height: 100%;  
      opacity: .125; 
      z-index: -1;
      
      background-color: white;
      -webkit-mask-image: url(${doorBackdrop});
      mask-image: url(${doorBackdrop});
      -webkit-mask-size: cover;
      mask-size: cover;
    }
    
    .content {
      overflow: hidden;
      font-family: "Indie Flower", sans-serif;
      
      img {
        height: 100%;
        width: auto;
        border-radius: 20px;
      }
      
      p {
        padding: 15px 30px;
        font-size: 1.6rem;
        text-align: center;
        z-index: 1;
        
        &:before, &:after {
          z-index: 0;
          position: absolute;
          font-size: 3em;
          color: rgba(255, 50, 50, .4);
          margin-top: -25px;
        }
        
        &:before {
          transform: rotate(-10deg);
          content: open-quote;
        }
        
        &:after {
          transform: rotate(30deg);
          margin-left: -20px;
          content: close-quote;
        }
      }
  
      .author {
        position: absolute;
        bottom: 20px;
        right: 20px;
      }
    }
      
    .fullscreen {
      &:after {
        content: "[]";
        display: block;
        background: rgba(255, 255, 255, .6);
        text-align: center;
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 100%;
        color: black;
        border: 1px solid black;
        position: absolute;
        top: 20px;
        right: 20px; 
      }
    }
    
    &.open {
      z-index: 2;
      transform: rotateY(0deg);
    }
  }
  
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: all 0.5s;
    transform-style: preserve-3d;
    border-radius: 20px;
    border: 1px solid #fff;
    box-sizing: border-box;
  }
`;