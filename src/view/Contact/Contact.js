import React from "react";

import VSensorjs from "../../components/VisibilitySensor";
import UsersToolbar from "./components/UsersToolbar/UsersToolbar";
import UsersTable from "./components/UsersTable/UsersTable";
import {
  useSelector
  // useDispatch
} from "react-redux";
const UserList = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <VSensorjs>
      <div>
        <UsersToolbar />
        <UsersTable users={contacts} />
      </div>
    </VSensorjs>
  );
};

export default UserList;
