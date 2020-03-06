import React from "react";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SettingsIcon from "@material-ui/icons/Settings";
import { makeStyles } from "@material-ui/styles";
import { List, ListItem, Button, colors } from "@material-ui/core";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  root: {},
  item: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: colors.blueGrey[800],
    padding: "10px 8px",
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%",
    fontWeight: theme.typography.fontWeightMedium
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(1)
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    "& $icon": {
      color: theme.palette.primary.main
    }
  }
}));
export default function LeftNavItems() {
  const classes = useStyles();
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
      title: "Contact",
      href: "/contact",
      icon: <LocationOnIcon />
    },
    {
      title: "Account",
      href: "/account",
      icon: <LocationOnIcon />
    },
    {
      title: "Setting",
      href: "/setting",
      icon: <SettingsIcon />
    }
  ];
  const btnClick = page => {
    // setValue(newValue);
    // history.push(newValue);
    history.push(page);
  };
  return (
    <List>
      {pages.map(page => (
        <ListItem className={classes.item} disableGutters key={page.title}>
          <Button
            className={classes.button}
            onClick={() => btnClick(page.href)}
          >
            <div className={classes.icon}>{page.icon}</div>
            {page.title}
          </Button>
        </ListItem>
      ))}
    </List>
  );
}
