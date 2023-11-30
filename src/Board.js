import React, { useState, useEffect } from "react";
import Square from "./Square";
import { calculateWinner } from "./utils/calculateWinner";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([]);
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [winnerLines, setWinnerLines] = useState([]);

  useEffect(() => {
    if (history?.length < 4) return;

    const [winner, winnerLines] = calculateWinner(squares);
    !!winner && setWinner(winner);
    !!winnerLines && setWinnerLines(winnerLines);
  }, [history, squares]);

  const squareHandler = (index) => {
    const _squares = [...squares];
    _squares[index] = player;
    setSquares(_squares);
    setPlayer(player === "X" ? "O" : "X");
    setHistory([...history, { player, square: index }]);
  };


  const reset = () => {
    setPlayer("X");
    setWinner(null);
    setWinnerLines([]);
    setSquares(Array(9).fill(null));
    setHistory([]);
  };

  return (
    <>
      {winner && <h1>Winner {winner}</h1>}

      {!winner && history.length === squares.length && <h1>No Winner!</h1>}
      <main className="scene">
        <section className="board-section">
          <div className="board">
            {squares?.length &&
              squares.map((square, index) => {
                return (
                  <Square
                    value={square}
                    onClick={() => squareHandler(index, square)}
                    disabled={winner}
                    style={{
                      color: winnerLines.includes(index) ? "red" : ""
                    }}
                    key={index}
                  />
                );
              })}
          </div>
        </section>
      </main>

      {(winner || history.length === 9) && (
        <button
          variant="contained"
          color="primary"
          size="large"
          onClick={reset}
          style={{margin:'auto'}}
        >
          Play Again
        </button>
      )}
    </>
  );
};

export default Board;
