import React, { useState, useEffect } from "react";
import { useStore } from "../../Store/UserStore";

import mockData from "./data";
import VSensorjs from "../../components/VisibilitySensor"
import UsersToolbar  from "./components/UsersToolbar/UsersToolbar";
import UsersTable  from "./components/UsersTable/UsersTable";

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
    <VSensorjs>
    <div>
      <UsersToolbar />
      <UsersTable users={state.orders} />
      <button onClick={click}> click</button>
    </div>
    </VSensorjs>

  );
};

export default UserList;
