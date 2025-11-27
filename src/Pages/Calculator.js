import React, { useState } from "react";
import Keypad from "../Components/Keypad";

const Calculator = () => {
  const [input, setInput] = useState("");
  function handleClick(value) {
    setInput(input + value);
  }
  function handleCalc(value) {
    let out = eval(input);
    setInput(out);
  }
  function handleClear() {
    setInput("");
  }
  return (
    <div className="container">
      Calculator
      <div className="calc">
        <input type="text" value={input} className="out" />
        <Keypad
          handleClick={handleClick}
          handleCalc={handleCalc}
          handleClear={handleClear}
        />
      </div>
    </div>
  );
};

export default Calculator;
