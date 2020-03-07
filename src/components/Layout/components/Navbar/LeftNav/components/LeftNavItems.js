import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SettingsIcon from "@material-ui/icons/Settings";
import BarChartIcon from "@material-ui/icons/BarChart";
import { useHistory } from "react-router-dom";

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList({ open }) {
  let history = useHistory();
  const pages = [
    {
      title: "Dashboard",
      href: "/",
      icon: <DashboardIcon />
    },
    {
      title: "Products",
      href: "/products",
      icon: <ShoppingBasketIcon />
    },
    {
      title: "Orders",
      href: "/orders",
      icon: <BarChartIcon />
    },
    {
      title: "Contact",
      href: "/contact",
      icon: <LocationOnIcon />
    },
    {
      title: "Account",
      href: "/account",
      icon: <AccountBoxIcon />
    },
    {
      title: "Settings",
      href: "/settings",
      icon: <SettingsIcon />
    },
    {
      title: "Test",
      href: "/Test",
      icon: <SettingsIcon />
    }
  ];
  const btnClick = page => {
    history.push(page);
  };

  return (
    <div>
      <List component="nav" aria-label="main mailbox folders">
        {pages.map(page => (
          <ListItem button onClick={() => btnClick(page.href)} key={page.title}>
            <ListItemIcon>{page.icon}</ListItemIcon>
            {open ? <ListItemText primary={page.title} /> : null}
          </ListItem>
        ))}
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>

        <ListItemLink href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItemLink>
      </List>
    </div>
  );
}
