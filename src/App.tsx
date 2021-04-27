import './App.css';
import Square from "./Square";
import React, {ReactElement, useCallback, useEffect, useMemo, useState} from "react";

function App() {
  const data = useMemo(() => [
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,5,0,1,1],
    [1,0,0,4,1],
    [1,0,0,0,1],
  ],[])

  const [squares, setSquares] = useState<ReactElement[][]>([]);
  const [row, setRow]= useState(-1);
  const [col, setCol]= useState(-1);

  const getSquare = useCallback(() => {
    const temp = [];
    for(let i = 0; i < data.length; i++){
      const tempRow = [];
      for(let j = 0; j < data[i].length; j++) {
        tempRow.push(<Square highlighted={i === row || j === col} onHover={() => handleOnHover(i, j)} isDiagonal={i === j} key={`${i}-${j}`}>{data[j][i]}</Square>)
      }
      temp.push(tempRow);
    }
    setSquares(temp);
  },[data, col, row])

  useEffect(() => {
    getSquare();
  }, [getSquare])

  const handleOnHover = (row: number, col: number) => {
    setRow(row);
    setCol(col);
  }
  
  return (
    <div className="App" >

      <div>
        <div className="title-container"></div>
        {
          data.map((_, index) => <div className="title-container">
            <div className={col === index ? "title active" : "title"}>Class {index}</div>
          </div>)
        }
      </div>    
      <div>
          <div className="row">
          {
          data.map((_, index) => <div className="title-container">
            <div className={row === index ? "title active" : "title"}>Class {index}</div>
          </div>)
        }
          </div>
          <div style={{display: "flex", flexWrap: "wrap", border: "1px solid #e5e5e5", padding: 2}} onMouseLeave={() => {
            setRow(-1);
            setCol(-1);
          }}>
            {
              squares.map((row, index) => {
                return (
                  <div style={{position: "relative"}} key={`row-${index}`}>
                    {
                      row.map(item => item)
                    }
                  </div>
                )
              })
            }
          </div>
      </div>  
    </div>
  );
}

export default App;
