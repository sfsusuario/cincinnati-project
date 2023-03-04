import React from 'react';
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState<number>(0);

  const API_SERVER = "https://be4iqhwe35.execute-api.us-east-1.amazonaws.com";

  function onClick() {
    fetch(`${API_SERVER}/clients`, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setCount(data.length)
      });
  }

  return (
    <div className="App">
      {<p>We have {count} clients.</p>}
      <br/>
      <button onClick={onClick} type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        Count clients
      </button>
    </div>
  );
}