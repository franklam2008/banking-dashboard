import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { useHistory } from "react-router-dom";
import pages from "../Pages/Pages";

export default function SimpleList() {
  let history = useHistory();
  const btnClick = page => {
    history.push(page);
  };
  return (
    <div className="LeftNav">
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
          <ErrorOutlineIcon />
        </ListItem>
      </List>
    </div>
  );

}
