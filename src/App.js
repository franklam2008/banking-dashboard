import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { ThemeProvider } from "@material-ui/styles";
import Dashboard from "./view/Dashboard/Dashboard";
import Accounts from "./view/Accounts/Accounts";
import Contact from "./view/Contact/Contact";
import Settings from "./view/Settings/Settings";
import Transactions from "./view/Transactions/Transactions";
import Test from "./view/Test/Test";
import Profile from "./view/Profile/Profile";
import theme from "./theme";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Store from "./Store/Store";
const store = createStore(Store);

function App() {
  return (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Router>
              <Layout>
                <Route exact path="/" component={Dashboard} />
                <Route path="/Accounts" component={Accounts} />
                <Route path="/Profile" component={Profile} />
                <Route path="/Transactions" component={Transactions} />
                <Route path="/Contact" component={Contact} />
                <Route path="/Settings" component={Settings} />
                <Route path="/Test" component={Test} />
              </Layout>
            </Router>
        </ThemeProvider>
    </Provider>
  );
}
// Testing 1
// Testing 2
// Testing 3
// Testing 4
export default App;
