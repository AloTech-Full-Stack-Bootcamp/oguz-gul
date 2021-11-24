import React, { useState } from "react";
import "./App.css";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const oprt = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (oprt.includes(value) && calc === "") ||
      (oprt.includes(value) && oprt.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!oprt.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const createDigits = () => {
    const digits = [];

    for (let index = 1; index < 10; index++) {
      digits.push(
        <button onClick={() => updateCalc(index.toString())} key={index}>
          {index}
        </button>
      );
    }

    return digits;
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }

    const value = calc.slice(0, -1);

    setCalc(value);
  };

  return (
    <div className="app">
      <div className="calculator">
        <h1 className="header">Calculate App</h1>
        <div className="display">
          {result ? <span>({result})</span> : ""} {calc || "0"}
        </div>

        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>

          <button onClick={deleteLast}>DEL</button>
        </div>

        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
