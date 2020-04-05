import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Example </h2>
      <h1>{counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>add </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>minus </button>
      <button onClick={() => dispatch({ type: "CHECK_STATE" })}>
        CHECK STATE
      </button>
    </div>
  );
}
