import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import Layout from "./components/Layout/Layout";
import { ThemeProvider } from "@material-ui/styles";
import Dashboard from "./view/Dashboard/Dashboard";
import Products from "./view/Products/Products";
import Contact from "./view/Contact/Contact";
import Settings from "./view/Settings/Settings";
import Account from "./view/Account/Account";
import theme from "./theme";

const AppCon = styled.div``;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppCon>
        <Router>
          <Layout>
            <Route exact path="/" component={Dashboard} />
            <Route path="/products" component={Products} />
            {/* <Route path="/movieList" component={Dashboard} /> */}
            <Route path="/account" component={Account} />
            <Route path="/contact" component={Contact} />
            <Route path="/settings" component={Settings} />
          </Layout>
        </Router>
      </AppCon>
    </ThemeProvider>
  );
}

export default App;
