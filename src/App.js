import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import Layout from "./components/Layout/Layout";
import { ThemeProvider } from "@material-ui/styles";
import Dashboard from "./view/Dashboard/Dashboard";
import Products from "./view/Products/Products";
import Contact from "./view/Contact/Contact";
import Settings from "./view/Settings/Settings";
import Orders from "./view/Orders/Orders";
import Test from "./view/Test/Test";
import Account from "./view/Account/Account";
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
              <Route path="/Account" component={Account} />
              <Route path="/Orders" component={Orders} />
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
