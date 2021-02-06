import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import MenuItem from "@material-ui/core/MenuItem";
import { IconButton } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import MenuList from "@material-ui/core/MenuList";
import Divider from "@material-ui/core/Divider";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Popper from "@material-ui/core/Popper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export default function SearchBar() {
  let history = useHistory();
  const classes = useStyles();

  const [value, setValue] = useState(null);

  //** Search Bar option */
  const [open, setOpen] = React.useState(false);

  //** State with the search bar topic */
  const [topic, setTopic] = useState("Nome");

  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleCloseNome = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
    setTopic("Nome");
  };
  const handleCloseAno = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
    setTopic("Ano");
  };
  const handleCloseDiretor = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
    setTopic("Diretor");
  };

  const handleCloseSinopse = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
    setTopic("Sinopse");
  };

  const handleCloseBusquedaAvancada = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          {topic}

          <ArrowDropDownIcon />
        </Button>

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleCloseNome}>Nome</MenuItem>
                    <MenuItem onClick={handleCloseAno}>Ano</MenuItem>
                    <MenuItem onClick={handleCloseDiretor}>Diretor</MenuItem>
                    <MenuItem onClick={handleCloseSinopse}>Sinopse</MenuItem>
                    <Divider />

                    <Link
                      to={"/busquedaavancada"}
                      style={{ textDecoration: "none", color: "inherit" }}
                      variant="body2"
                    >
                      <MenuItem onClick={handleCloseBusquedaAvancada}>
                        BUSQUEDA AVANÇADA
                      </MenuItem>
                    </Link>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
      <Divider orientation="vertical" flexItem />

      <InputBase
        className={classes.input}
        placeholder="Pesquisar filme produzidos na baia"
        inputProps={{ "aria-label": "search google maps" }}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            history.push(`/busquedaavancada/${topic}/${value}`);
          }
        }}
      />
      <Divider orientation="vertical" flexItem />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
        component={Link}
        to={`/busquedaavancada/${topic}/${value}`}
      >
        <SearchIcon />
      </IconButton>
    </div>
  );
}
