/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// import React from "react";
import React from "react";
import styled from "styled-components";
//css
// import TopNav from "../Navbar/TopNav";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const FullPage = styled.div`
  overflow-x: hidden;
`;
const MainCon = styled.div`
  padding: 90px 20px 0 180px;
  background-color: #f2f5f7;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  @media (max-width: 960px) {
    padding-left: 20px;
    padding-bottom: 40px;
  }
`;
const ViewCon = styled.div`
  flex: 1;
`;


const Layout = ({ children }) => {
  return (
    <FullPage>
      <Navbar />
      <MainCon>
        <ViewCon>
            {children}
        </ViewCon>

        <Footer />
      </MainCon>
    </FullPage>
  );
};

export default Layout;
