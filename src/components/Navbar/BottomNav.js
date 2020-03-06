import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SettingsIcon from "@material-ui/icons/Settings";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useHistory } from "react-router-dom";
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  let history = useHistory();
  return (
    <div className="BottomNav">
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          history.push(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction
          label="Dashboard"
          value="/"
          icon={<DashboardIcon />}
        />
        <BottomNavigationAction
          label="products"
          value="/products"
          icon={<ShoppingBasketIcon />}
        />
        <BottomNavigationAction
          label="contact"
          value="/contact"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          label="Setting"
          value="/setting"
          icon={<SettingsIcon />}
        />
      </BottomNavigation>
    </div>
  );
}
