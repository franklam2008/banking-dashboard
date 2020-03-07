import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import pages from "../Pages/Pages";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

export default function SwipeableTemporaryDrawer({ open, setOpen }) {
  const classes = useStyles();
  let history = useHistory();
  const btnClick = page => {
    history.push(page);
  };
  const toggleDrawer = mobileDrawer => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(mobileDrawer);
  };
  React.useEffect(() => {
    toggleDrawer(open);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List component="nav" aria-label="main mailbox folders">
        {pages.map(page => (
          <ListItem button onClick={() => btnClick(page.href)} key={page.title}>
            <ListItemIcon>{page.icon}</ListItemIcon>
            <ListItemText primary={page.title} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
      </List>
    </div>
  );
  return (
    <SwipeableDrawer
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      {sideList()}
    </SwipeableDrawer>
  );
}
