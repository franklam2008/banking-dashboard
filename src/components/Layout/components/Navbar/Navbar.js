import React from "react";
import styled from "styled-components";
import BottomNav from "./BottomNav/BottomNav";
import LeftNav from "./LeftNav/LeftNav";
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
    @media (max-width: 768px) {
      opacity: 0;
      z-index: -99;
    }
    .MuiListItemIcon-root {
      min-width: 36px;
    }
  }
  .BottomNav {
    position: fixed;
    bottom: 0;
    z-index: -10;
    width: 100vw;
    margin: 0 auto;
    opacity: 0;
    @media (max-width: 768px) {
      z-index: 10;
      opacity: 1;
    }
  }
`;

export default function Navbar() {
  const [open, setOpen] = React.useState(true);
  return (
    <NavbarCon>
      <Topbar open={open} setOpen={setOpen} />
      <LeftNav open={open} id={open ? "openLeftNav" : null} />
      <BottomNav />
    </NavbarCon>
  );
}
