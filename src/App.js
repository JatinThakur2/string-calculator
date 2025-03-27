import React, { useState } from "react";
import { add } from "./calculator";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [showAdvanced, setShowAdvanced] = useState(false);

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
              Define custom delimiters: <code>{"//;\\n1;2;3"}</code>
            </li>
            <li>Negative numbers are not allowed</li>
            <li>Numbers greater than 1000 will be ignored</li>
          </ul>

          <button
            className="toggle-advanced"
            onClick={() => setShowAdvanced(!showAdvanced)}
          >
            {showAdvanced ? "Hide Advanced Features" : "Show Advanced Features"}
          </button>

          {showAdvanced && (
            <div className="advanced-instructions">
              <h4>Advanced Delimiter Features:</h4>
              <ul>
                <li>
                  Use delimiters of any length:{" "}
                  <code>{"//[***]\\n1***2***3"}</code>
                </li>
                <li>
                  Use multiple delimiters: <code>{"//[*][%]\\n1*2%3"}</code>
                </li>
                <li>
                  Use multiple delimiters with length longer than one character:
                  <code>{"//[**][%%]\\n1**2%%3"}</code>
                </li>
                <li>
                  Example with multiple features:{" "}
                  <code>{"//[###][@@]\\n1###2@@3\\n4,5"}</code>
                </li>
              </ul>

              <div className="examples-section">
                <h4>Example Inputs:</h4>
                <div className="example-buttons">
                  <button
                    className="example-btn"
                    onClick={() => setInput("1,2,3,4,5")}
                  >
                    Basic Example
                  </button>
                  <button
                    className="example-btn"
                    onClick={() => setInput("1\n2,3")}
                  >
                    Newline Example
                  </button>
                  <button
                    className="example-btn"
                    onClick={() => setInput("//;\n1;2;3")}
                  >
                    Custom Delimiter
                  </button>
                  <button
                    className="example-btn"
                    onClick={() => setInput("//[***]\n1***2***3")}
                  >
                    Long Delimiter
                  </button>
                  <button
                    className="example-btn"
                    onClick={() => setInput("//[*][%]\n1*2%3")}
                  >
                    Multiple Delimiters
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <footer className="calculator-footer">
        <p>String Calculator Implementation - All requirements implemented</p>
        <div className="features-list">
          <span className="feature-tag">Basic Addition</span>
          <span className="feature-tag">Custom Delimiters</span>
          <span className="feature-tag">Multiple Delimiters</span>
          <span className="feature-tag">Ignore &gt; 1000</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
