import React from "react";
import { 
  // useSelector, 
  useDispatch }
   from "react-redux";

export default function () {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch({ type: "CHANGE_CHECKING_NUM" })}>
        CHANGE_CHECKING_NUM{" "}
      </button>
      <button onClick={() => dispatch({ type: "CHECK_STATE" })}>
        CHECK_STATE
      </button>
    </div>
  );
}
