import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementHandler = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="container">
      <h3>Counter: {counter}</h3>

      <button className="btn btn-success" onClick={incrementHandler}>
        Increment
      </button>

      <button
        className="btn btn-danger"
        onClick={() => setCounter(counter - 1)}
      >
        Decrement
      </button>

      <button className="btn btn-secondary" onClick={() => setCounter(0)}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
