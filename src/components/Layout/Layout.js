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
import Navbar from "../Navbar/Navbar";
const FullPage = styled.div`
  min-height: 100vh;
  display: flex;
  .LeftNav {
  }
`;
const MainCon = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-left:200px;
  width:100vw;
  overflow-x:hidden;
  @media(max-width: 768px) {
    padding-left:0px;
  }
`;
const ViewCon = styled.div`
  flex: 1;
`;

const Layout = ({ children }) => {
  return (
    <FullPage>
      {/* <Topbar /> */}
      <Navbar />
      <MainCon>
        <ViewCon>{children}</ViewCon>
      </MainCon>
    </FullPage>
  );
};

export default Layout;
