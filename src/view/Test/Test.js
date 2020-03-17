import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Example </h2>
      <h1>{counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>add 1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>minus 1</button>
    </div>
  );
}
