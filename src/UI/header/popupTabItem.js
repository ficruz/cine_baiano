import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    //maxWidth: "100px",

    display: "flex",
    marginLeft: "30px",
  },
  paper: { backgroundColor: theme.palette.primary.main },
  tabsText: {
    ...theme.typography.tab,
    fontSize: "1rem",
    fontWeight: 400,
    color: "#eaeaea",
    opacity: 0.6,
    "&:hover": { opacity: 1 },
  },
  button: {
    ...theme.typography.tab,
    fontSize: "0.9rem",
    fontWeight: 400,
    color: "#eaeaea",

    opacity: 0.6,
    "&:hover": { opacity: 1 },

    backgroundColor: theme.palette.primary.main,
  },
}));

export default function MenuListComposition(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const history = useHistory();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  //console.log(props);

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    //console.log(link);
    //history.push(`${link}`);

    setOpen(false);
  };

  const handleTabClick = (link) => (event) => {
    setOpen(false);
    return history.push(`${link}`);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Button
          className={classes.button}
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          {props.name}
        </Button>
        {props.drawer}
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          placement={props.placement}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper className={classes.paper}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    {props.tabs.map((el) => {
                      return (
                        <MenuItem
                          className={classes.tabsText}
                          onClick={handleTabClick(el.link)}
                        >
                          {el.name}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
