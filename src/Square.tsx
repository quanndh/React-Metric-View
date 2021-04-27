import React, { CSSProperties } from "react";

export type SquareProps = {
  isDiagonal?: boolean;
  onHover?: () => void;
  highlighted?: boolean;
}

const Square: React.FC<SquareProps> = ({children, isDiagonal = false, onHover = () => {}, highlighted = false}) => {

  const handleMouseOver = () => {
    onHover()
  }

  const backGroundColor = () => {
    if(isDiagonal) return "green"
    else if(children !== 0) return "red";

    return "white";
  }

  const textStyle = () => {
    const style: CSSProperties = {color: "#e5e5e5"};
    if(isDiagonal) {
      style.color = "white";
      if(highlighted) {
        style.fontWeight = 600;
      }
    } else {
      if(highlighted) {
        style.fontWeight = 600;
        style.color = "black";
      }
    }
    
    return style
  }

  return (
    <div onMouseOver={handleMouseOver} className="square-container" style={{backgroundColor: backGroundColor(), position: "relative"}}>
      <p style={textStyle()}>{children}</p>
    </div>
  )
}

export default Square;