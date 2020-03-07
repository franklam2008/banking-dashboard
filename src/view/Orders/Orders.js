import React, { useState, useEffect } from "react";
import { useStore } from "../../Store/UserStore";

import { UsersToolbar, UsersTable } from "./components";
import mockData from "./data";


const UserList = () => {
  const { state, dispatch } = useStore();

  const [users] = useState(mockData);
  function click() {
    console.log("click");
  }
  useEffect(() => {
    dispatch({ type: "InsertOrders", payload: users });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <UsersToolbar />
      <div>
        <UsersTable users={state.orders} />
      </div>
      <button onClick={click}> click</button>
    </div>
  );
};

export default UserList;
