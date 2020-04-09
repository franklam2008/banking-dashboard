import transactonsData from "./transactonsData";
import accountsData from "./accountsData";
import contactsData from "./contactsData";
import userData from "./userData";
import { balanceData } from "./balanceData";

const initialState = {
  counter: 0,
  transactions: transactonsData,
  accounts: accountsData,
  contacts: contactsData,
  user: userData,
  balanceData: balanceData,
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
