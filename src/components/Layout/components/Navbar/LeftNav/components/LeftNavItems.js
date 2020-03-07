import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import BarChartIcon from "@material-ui/icons/BarChart";
import { useHistory } from "react-router-dom";
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList({ open }) {
  let history = useHistory();
  const pages = [
    {
      title: "Dashboard",
      href: "/",
      icon: <DashboardOutlinedIcon />
    },
    {
      title: "Products",
      href: "/products",
      icon: <ShoppingBasketOutlinedIcon />
    },
    {
      title: "Orders",
      href: "/orders",
      icon: <BarChartIcon />
    },
    {
      title: "Contact",
      href: "/contact",
      icon: <SupervisorAccountOutlinedIcon />
    },
    {
      title: "Account",
      href: "/account",
      icon: <PersonOutlineOutlinedIcon />
    },
    {
      title: "Settings",
      href: "/settings",
      icon: <SettingsOutlinedIcon />
    },
    {
      title: "Test",
      href: "/Test",
      icon: <BuildOutlinedIcon />
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
