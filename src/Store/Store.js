import transactonsData from "./transactonsData";
import accountsData from "./accountsData";
import uuid from "uuid/v1";
import contactsData from "./contactsData";

const initialState = {
  counter: 0,
  transactions: transactonsData,
  accounts: accountsData,
  contacts: contactsData,
  user: {
    id: uuid(),
    name: "Alexa Richardson",
    progress: 70,
    address: {
      country: "USA",
      state: "Georgia",
      city: "Atlanta",
      street: "4894  Lakeland Park Drive",
    },
    email: "alexa.richardson@devias.io",
    phone: "770-635-2682",
    avatarUrl: "/images/avatars/avatar_2.png",
    createdAt: 1555016400000,
  },
  checking: "5,250",
  credit: "1,600",
  savingProgress: "20,600",
  invest: "283,200",
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "CHECKING":
      return { ...state, checking: "999" };
    case "UPDATE_USER":
      return { ...state, user: action.payload };
    case "CHECK_STATE":
      console.log("stateNow", state);
      return { ...state };

    default:
      return state;
  }
}

export default rootReducer;
