import React from 'react';
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState<string>("");

  function onClick() {
    fetch("/api/count", { method: "POST" })
      .then((response) => response.text())
      .then(setCount);
  }

  return (
    <div className="App">
      <h1>PROBANDO... 1</h1>
      {count && <p>You clicked me {count} times.</p>}
      <button onClick={onClick}>Click Me!</button>
    </div>
  );
}