import React from "react";
import Board from "./Board";
import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <div className="header">TIC-TAC-TOE</div>
      <Board />
    </div>
  );
}
