import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    // Fetch initial advice when the component mounts
    getAdvice();
  }, []);

  function Message(props) {
    return (
      <p>
        You have read <strong>{props.count}</strong> pieces of advice
      </p>
    );
  }

  return (
    <div className="App">
      <h1>Advice Generator</h1>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </div>
  );
}

export default App;
