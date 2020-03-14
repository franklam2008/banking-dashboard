import React, { createContext, useReducer, useContext } from "react";
import uuid from "uuid/v1";

//state
const defaultState = {
  checking: "5,250",
  credit: "1,600",
  savingProgress: "20,600",
  invest: "283,200",
  user: {
    id: uuid(),
    name: "Alexa Richardson",
    progress: 70,
    address: {
      country: "USA",
      state: "Georgia",
      city: "Atlanta",
      street: "4894  Lakeland Park Drive"
    },
    email: "alexa.richardson@devias.io",
    phone: "770-635-2682",
    avatarUrl: "/images/avatars/avatar_2.png",
    createdAt: 1555016400000
  },

  orders: []
};

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const value = { state, dispatch };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useStore = () => useContext(UserContext);

//reducer - function to pass data to State
function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, login: true, authUser: action.payload };
    case "REMOVE_USER":
      return { ...state, login: false, authUser: [] };
    case "ADD_DATA":
      return { ...state, data: action.payload };
    //log
    case "CHECK_STATE":
      console.log("stateNow", state);
      return { ...state };

    //default
    default:
      return state;
  }
}
