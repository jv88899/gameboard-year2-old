import React from "react";
import Original from "./transactions/Original";
import "./style.css";

export default function App() {
  return (
    <div className="game-board-wrapper">
      <Original companyName="Medica"/>
    </div>
  );
}
