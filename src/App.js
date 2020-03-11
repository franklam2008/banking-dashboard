import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import Layout from "./components/Layout/Layout";
import { ThemeProvider } from "@material-ui/styles";
import Dashboard from "./view/Dashboard/Dashboard";
import Products from "./view/Products/Products";
import Contact from "./view/Contact/Contact";
import Settings from "./view/Settings/Settings";
import Transactions from "./view/Transactions/Transactions";
import Test from "./view/Test/Test";
import Accounts from "./view/Accounts/Accounts";
import { UserProvider } from "./Store/UserStore";
import theme from "./theme";
const AppCon = styled.div``;

function App() {
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <AppCon>
          <Router>
            <Layout>
              <Route exact path="/" component={Dashboard} />
              <Route path="/Products" component={Products} />
              <Route path="/Accounts" component={Accounts} />
              <Route path="/Transactions" component={Transactions} />
              <Route path="/Contact" component={Contact} />
              <Route path="/Settings" component={Settings} />
              <Route path="/Test" component={Test} />
            </Layout>
          </Router>
        </AppCon>
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
