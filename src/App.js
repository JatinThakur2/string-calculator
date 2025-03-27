import React, { useState } from "react";
import { add } from "./calculator";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setResult(null);
    }
  };

  return (
    <div className="app-container">
      <h1>String Calculator</h1>
      <div className="calculator-container">
        <div className="input-group">
          <label htmlFor="numbersInput">Enter comma-separated numbers:</label>
          <textarea
            id="numbersInput"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g., 1,2,3 or 1\n2,3 or //;\n1;2"
            rows={5}
          />
        </div>

        <button onClick={handleCalculate} className="calculate-btn">
          Calculate Sum
        </button>

        {result !== null && (
          <div className="result success">
            <h2>Result: {result}</h2>
          </div>
        )}

        {error && (
          <div className="result error">
            <h2>Error:</h2>
            <p>{error}</p>
          </div>
        )}

        <div className="instructions">
          <h3>Instructions:</h3>
          <ul>
            <li>
              Enter numbers separated by commas: <code>1,2,3</code>
            </li>
            <li>
              Use new lines as separators: <code>1\n2,3</code>
            </li>
            <li>
              Define custom delimiters:{" "}
              <code>
                {"//"};{"\n"}1;2;3
              </code>
            </li>
            <li>Negative numbers are not allowed</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
