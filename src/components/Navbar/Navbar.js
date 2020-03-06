import React from "react";
import styled from "styled-components";
import BottomNav from "./BottomNav";
import LeftNav from "./LeftNav/LeftNav";
const LeftNavCon = styled.div`
  display: flex;
  .LeftNav {
    position: fixed;
    z-index: 99;
    height:100vh;
    background-color: white;
    @media (max-width: 768px) {
        opacity: 0;
        z-index: -99;

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
  return (
    <LeftNavCon>
      <LeftNav />
      <BottomNav />
    </LeftNavCon>
  );
}
