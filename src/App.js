import React, { useState } from "react";

import "./App.css";

import Square from "./Square";

function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);

  const handleClick = () => {
    setSquares(["", "", "", "", "", "", "", "", ""]);
    setPlayer(true);
  };

  const calculateWinner = (arr) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (arr[a] === "X" && arr[b] === "X" && arr[c] === "X") {
        return (
          <div>
            <p>{arr[a]} won!</p>
          </div>
        );
      } else if (arr[a] === "O" && arr[b] === "O" && arr[c] === "O") {
        return (
          <div>
            <p>{arr[a]} won!</p>
          </div>
        );
      }
    }
    return "Who will win?";
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Reset</button>
      <div className="container">
        {squares.map((val, index) => {
          return (
            <Square
              setSquares={setSquares}
              index={index}
              squareValue={val}
              squares={squares}
              player={player}
              setPlayer={setPlayer}
            />
          );
        })}
      </div>
      <span>{calculateWinner(squares)}</span>
    </div>
  );
}

export default App;
