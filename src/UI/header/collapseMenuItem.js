import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    ...theme.typography.tab,
    color: "white",
    opacity: 0.6,
    fontWeight: 400,

    textTransform: "uppercase",
  },
  nested: {
    paddingLeft: theme.spacing(4),
    opacity: 0.6,
    fontWeight: 300,
    "&:hover": { opacity: 1, backgroundColor: theme.palette.common.darkerRed },
  },
}));

export default function NestedList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button onClick={handleClick}>
        <ListItemText primary={props.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {props.tabs.map((el) => {
            return (
              <ListItem
                component={Link}
                to={el.link}
                key={el.name}
                onClick={() => props.openDrawer(false)}
                button
                className={classes.nested}
              >
                <ListItemText primary={el.name} />
              </ListItem>
            );
          })}
        </List>
      </Collapse>
    </List>
  );
}
