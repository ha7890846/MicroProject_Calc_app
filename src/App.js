import React, { useState } from "react";
import "./App.css";
import { evaluate } from "mathjs";

function App() {
  const [display, setDisplay] = useState("0");

  // Function to handle button clicks


const handleButtonClick = async (value) => {
  if (value === "=") {
    try {
      const result = evaluate(display).toString(); // Use mathjs to evaluate the expression
      setDisplay(result);
    } catch (error) {
      setDisplay("Error");
    }
  } else if (value === "RESET") {
    setDisplay("0");
  } else if (value === "DEL") {
    setDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
  } else {
    setDisplay((prev) => (prev === "0" || prev === "Error" ? value : prev + value));
  }
};

  

  // Render the calculator UI
  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        {["7", "8", "9", "DEL"].map((btn) => (
          <button key={btn} onClick={() => handleButtonClick(btn)}>
            {btn}
          </button>
        ))}
        {["4", "5", "6", "+"].map((btn) => (
          <button key={btn} onClick={() => handleButtonClick(btn)}>
            {btn}
          </button>
        ))}
        {["1", "2", "3", "-"].map((btn) => (
          <button key={btn} onClick={() => handleButtonClick(btn)}>
            {btn}
          </button>
        ))}
        {[".", "0", "/", "*"].map((btn) => (
          <button key={btn} onClick={() => handleButtonClick(btn)}>
            {btn}
          </button>
        ))}
        <button onClick={() => handleButtonClick("RESET")} className="reset">
          RESET
        </button>
        <button onClick={() => handleButtonClick("=")} className="equals">
          =
        </button>
      </div>
    </div>
  );
}

export default App;
