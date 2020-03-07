import React from "react";
import LeftNavItems from "./components/LeftNavItems";

export default function VerticalTabs({open}) {
 
  return (
    <div className="LeftNav">
      <LeftNavItems open={open}/>
    </div>
  );
}
