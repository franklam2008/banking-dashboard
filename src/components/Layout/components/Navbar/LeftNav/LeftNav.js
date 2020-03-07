import React from "react";
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import SupervisorAccountOutlinedIcon from "@material-ui/icons/SupervisorAccountOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import BarChartIcon from "@material-ui/icons/BarChart";
import { useHistory } from "react-router-dom";
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";

const useStyles = makeStyles(theme => ({
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    paddingLeft: 7,
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(1)
  },
  text: {
    margin: 0,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize:'10px',
  }
}));
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
  const classes = useStyles();
  return (
    <div className="LeftNav">
      <List component="nav" aria-label="main mailbox folders">
        {pages.map(page => (
          <ListItem button onClick={() => btnClick(page.href)} key={page.title}>
            <div className={classes.icon}>{page.icon}</div>
            {open ? (
              <ListItemText className={classes.text} primary={page.title} />
            ) : null}
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
  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }
}
