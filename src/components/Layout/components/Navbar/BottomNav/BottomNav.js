import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AccountBalanceOutlinedIcon from "@material-ui/icons/AccountBalanceOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import ListIcon from "@material-ui/icons/List";
import { useHistory } from "react-router-dom";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
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
          icon={<DashboardOutlinedIcon />}
        />
        <BottomNavigationAction
          label="Transactions"
          value="/Transactions"
          icon={<ListIcon />}
        />
        <BottomNavigationAction
          label="Accounts"
          value="/accounts"
          icon={<AccountBalanceOutlinedIcon />}
        />
        <BottomNavigationAction
          label="Settings"
          value="/settings"
          icon={<SettingsOutlinedIcon />}
        />
      </BottomNavigation>
    </div>
  );
}
