import transactonsData from "./transactonsData";
import accountsData from "./accountsData";
import contactsData from "./contactsData";
import userData from "./userData";
import { balanceData } from "./balanceData";
import { spendingData,devices } from "./spendingData";

const initialState = {
  counter: 0,
  transactions: transactonsData,
  accounts: accountsData,
  contacts: contactsData,
  user: userData,
  spendingData:spendingData,
  devices:devices,
  balanceData: balanceData,
  checking: "5,250",
  credit: "1,600",
  savingProgress: "20,600",
  invest: "283,200",
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
   
    case "CHANGE_CHECKING_NUM":
      return { ...state, checking: "1,999" };
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
