import React from "react";
import styled from "styled-components";
import BottomNav from "./BottomNav/BottomNav";
import LeftNav from "./LeftNav/LeftNav";
import MobileLeftDrawer from "./MobileLeftDrawer/MobileLeftDrawer";
import Topbar from "./TopNav/TopNav";
const NavbarCon = styled.div`
  display: flex;
  #openLeftNav {
    opacity: 1;
    z-index: 99;
  }
  .LeftNav {
    padding-top: 60px;
    position: fixed;
    z-index: 99;
    height: 100vh;
    background-color: white;
    @media (max-width: 960px) {
      opacity: 0;
      z-index: -99;
    }
 .MuiListItemIcon-root{
  min-width:35px;
 }
    .MuiTypography-body1 {
      font-size: 14px;
      font-weight: 300;
      padding-right:5px;
    }
  }
  .BottomNav {
    position: fixed;
    bottom: 0;
    z-index: -10;
    width: 100vw;
    margin: 0 auto;
    opacity: 0;
    @media (max-width: 960px) {
      z-index: 10;
      opacity: 1;
    }
  }
`;

export default function Navbar() {
  const [mobileDrawer, setMobileDrawer] = React.useState(false);

  return (
    <NavbarCon>
      <Topbar setOpen={setMobileDrawer}/>
      <LeftNav  />
      <MobileLeftDrawer open={mobileDrawer} setOpen={setMobileDrawer}/>
      <BottomNav />
    </NavbarCon>
  );
}
