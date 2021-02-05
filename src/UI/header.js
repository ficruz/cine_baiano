import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import SearchIcon from "@material-ui/icons/Search";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import CameraIcon from "@material-ui/icons/Camera";
import { Button } from "@material-ui/core";

import SearchBar from "./searchBar";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    backgroundColor: "black",
  },

  drawerIconContainer: {
    marginRight: "auto",
    color: "white",
    "&:hover": { backgroundColor: "transparent" },
    alignItems: "center",
    display: "flex",
  },
  drawerIcon: {
    height: "40px",
    width: "40px",
    color: "white",
  },
  title: {
    ...theme.typography.tab,
    color: theme.palette.common.white,
    display: "flex",

    marginLeft: "30px",
  },
  drawer: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.grey,
  },
  drawerTypo: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.6,
    "&:hover": { opacity: 1 },
    textTransform: "uppercase",
  },
  drawerTypoSelected: {
    ...theme.typography.tab,
    color: "white",
    opacity: 1,
    textTransform: "uppercase",
  },
  searchBar: {
    backgroundColor: "white",
    marginLeft: "2em",
    flexGrow: 1,
    borderRadius: 10,
  },
  toolbar: {
    maxWidth: 1280,
    flexGrow: 1,
    padding: 0,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  //** State to save and check current selected window */
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [popupSearchBar, setPopupSearchBar] = useState(false);

  const handleOpenSearchBar = () => {
    return setPopupSearchBar(true);
  };

  const handleCloseSearchBar = () => {
    return setPopupSearchBar(false);
  };

  const route = [
    { name: "Pagina Inicial", link: "/home", activeIndex: 0 },
    {
      name: "Quem Somos",
      link: "/quemsomos",
      activeIndex: 1,
    },
    { name: "O que é um filme baiano?", link: "/filmebaiano", activeIndex: 2 },

    { name: "Busqueda Avançada", link: "/busquedaavancada", activeIndex: 5 },
  ];

  useEffect(() => {
    [...route].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  });

  const tabs = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <List>
          {route.map((route) => (
            <ListItem
              key={`${route.name}${route.activeIndex}`}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
              button
              component={Link}
              to={route.link}
              selected={value === route.link}
            >
              <ListItemText
                className={
                  value === route.activeIndex
                    ? classes.drawerTypoSelected
                    : classes.drawerTypo
                }
              >
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <Button
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
        Menu
      </Button>
      <Box className={classes.searchBar}>
        <SearchBar />
      </Box>

      <Link to={"/home"} underline={"none"}>
        <Box className={classes.title}>
          <CameraIcon color="secondary" /> Filmografia Bahiana
        </Box>
      </Link>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <List>
          {route.map((route) => (
            <ListItem
              key={`${route.name}${route.activeIndex}`}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
              button
              component={Link}
              to={route.link}
              selected={value === route.link}
            >
              <ListItemText
                className={
                  value === route.activeIndex
                    ? classes.drawerTypoSelected
                    : classes.drawerTypo
                }
              >
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>

      <div className={classes.drawerIconContainer}>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
          <MenuIcon className={classes.drawerIcon} />
        </IconButton>

        <Link to={"/"} underline={"none"}>
          <CameraIcon color="secondary" />
        </Link>
      </div>

      <Button onClick={handleOpenSearchBar}>
        <SearchIcon color="secondary" />
      </Button>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {popupSearchBar ? (
        <AppBar style={{ position: "fixed" }} color={"secondary"}>
          <Container maxWidth={"xs"}>
            <Box height={"65px"} display="flex">
              <SearchBar></SearchBar>
              <Button onClick={handleCloseSearchBar}>
                <HighlightOffIcon />
              </Button>
            </Box>
          </Container>
        </AppBar>
      ) : (
        <AppBar position="fixed">
          <Container maxWidth={"lg"}>
            <Toolbar className={classes.toolbar}>
              {matches ? drawer : tabs}
            </Toolbar>
          </Container>
        </AppBar>
      )}

      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
