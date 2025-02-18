import './App.css';
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter_container">
        <h1>Counter App</h1>
        <p className="count">{count}</p>
        <div className="buttons">
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
    </div>
  );
}

export default App;
