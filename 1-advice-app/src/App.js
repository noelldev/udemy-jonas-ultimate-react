import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("Advice will appear here");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data.slip.advice);
      setAdvice(data.slip.advice);
      setCount((prevCount) => prevCount + 1);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }

  return (
    <div className="App">
      <h1>Advice Generator</h1>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <p>
        You have read <strong>{count}</strong> pieces of advice
      </p>
    </div>
  );
}

export default App;
