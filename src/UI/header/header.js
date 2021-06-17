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
import ListSubheader from "@material-ui/core/ListSubheader";
import { Divider } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Fab } from "@material-ui/core";

import logoMarca from "../../assets/marca.png";

import SearchBar from "./searchBar";
import PopUp from "./popupTabItem";
import Collapsable from "./collapseMenuItem";

import { useOktaAuth } from "@okta/okta-react/";

const useStyles = makeStyles((theme) => ({
  root: { margin: theme.spacing(2) },
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
  logo: { maxHeight: "40px", marginRight: "auto" },

  title: {
    ...theme.typography.tab,
    color: theme.palette.common.white,
    // display: "flex",

    marginLeft: "30px",
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.grey,
  },
  drawerTypo: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.6,
    "&:hover": { opacity: 1 },
    textTransform: "uppercase",
  },
  drawerSubheader: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.6,

    // color: theme.palette.common.darkerRed,
  },
  drawerBusquedaAv: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.6,
    padding: "1em",

    // color: theme.palette.common.darkerRed,
  },
  drawerTypoSelected: {
    ...theme.typography.tab,
    color: "white",
    opacity: 1,
    textTransform: "uppercase",
  },
  searchBar: {
    backgroundColor: "white",
    marginLeft: theme.spacing(4),
    marginRigth: theme.spacing(2),
    //flexGrow: 1,
    borderRadius: 10,
  },
  movileSearchBar: {
    backgroundColor: "white",
    //marginLeft: theme.spacing(4),
    //marginRigth: theme.spacing(2),
    //flexGrow: 1,
    margin: "10px 0 10px 0",
    borderRadius: 10,
    //pading: "5px",
  },
  toolbar: {
    maxWidth: 1280,
    flexGrow: 1,
    padding: 0,
  },
  divMargin: {
    backgroundColor: "black",
    height: "3.8em",
  },
  popupItem: {
    //maxWidth: "10px",
    marginLeft: theme.spacing(2),
  },
}));

const Header = (props) => {
  const { oktaAuth, authState } = useOktaAuth();
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const home = "/";

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

  const handleSelectedMenu = (event, newValue) => {
    return setValue(newValue);
  };

  const route = [
    { name: "Pagina Inicial", link: home, activeIndex: 0 },
    {
      name: "Quem Somos",
      link: "/quemsomos",
      activeIndex: 1,
    },
    { name: "O que é um filme baiano?", link: "/filmebaiano", activeIndex: 2 },

    { name: "Busqueda Avançada", link: "/busquedaavancada", activeIndex: 5 },
  ];

  const busquedaAvancada = [
    {
      name: "Busqueda Avançada",
      link: "/busquedaavancada",
      tabIndex: 3,
      activeIndex: 10,
    },
  ];

  const quemSomos = [
    {
      name: "Quem Somos",
      link: "/Institucional/7",
      tabIndex: 0,
      activeIndex: 0,
    },
    {
      name: "Agradecimento",
      link: "/Institucional/9",
      tabIndex: 0,
      activeIndex: 1,
    },
  ];

  const banco = [
    {
      name: "Banco de Textos",
      link: "/Institucional/10",
      tabIndex: 2,
      activeIndex: 2,
    },
  ];

  const sobreOProjeto = [
    {
      name: "Nosas Bases",
      link: "/Institucional/1",
      tabIndex: 1,
      activeIndex: 9,
    },
    {
      name: "Criterios e Alcance",
      link: "/Institucional/2",
      tabIndex: 1,
      activeIndex: 8,
    },
    { name: "Objetivo", link: "/Institucional/3", tabIndex: 1, activeIndex: 0 },
    {
      name: "Historico",
      link: "/Institucional/4",
      tabIndex: 1,
      activeIndex: 3,
    },
    {
      name: "Fase 1",
      link: "/Institucional/5",
      tabIndex: 1,
      activeIndex: 4,
    },
    {
      name: "Fase 2",
      link: "/Institucional/6",
      tabIndex: 1,
      activeIndex: 5,
    },
    {
      name: "Fontes",
      link: "/Institucional/8",
      tabIndex: 1,
      activeIndex: 6,
    },
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
      <Link
        to={home}
        className={classes.drawerIconContainer}
        underline={"none"}
      >
        <img className={classes.logo} src={logoMarca} alt="logo_marca"></img>
      </Link>

      <PopUp name={"Quem Somos"} tabs={quemSomos} />
      <PopUp
        className={classes.popupItem}
        name={"Sobre o Projeto"}
        tabs={sobreOProjeto}
        placement={"bottom"}
      />
      <PopUp
        className={classes.popupItem}
        name={"Banco de Textos"}
        tabs={banco}
        placement={"bottom"}
      />
      <PopUp
        className={classes.popupItem}
        name={"Busqueda Avançada"}
        tabs={busquedaAvancada}
        placement={"bottom"}
      />

      <Box className={classes.searchBar}>
        <SearchBar />
      </Box>
      {authState.isAuthenticated ? (
        <Fab
          style={{ marginLeft: "15px", backgroundColor: "red" }}
          size="small"
          aria-label="add"
          onClick={async () => oktaAuth.signOut()}
        >
          <ExitToAppIcon />
        </Fab>
      ) : null}
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
        <List
          subheader={
            <ListSubheader
              className={classes.drawerSubheader}
              component="div"
              id="nested-list-subheader"
            >
              Filmografia Baiana
            </ListSubheader>
          }
        ></List>
        <Divider style={{ background: "white", opacity: 0.5 }} />
        <List>
          <ListItem button>
            <Collapsable
              openDrawer={(e) => setOpenDrawer(e)}
              name={"Quem Somos"}
              tabs={quemSomos}
            />
          </ListItem>
          <ListItem button>
            <Collapsable
              openDrawer={(e) => setOpenDrawer(e)}
              name={"Sobre o Projeto"}
              tabs={sobreOProjeto}
            />
          </ListItem>
          <ListItem button>
            <Collapsable
              openDrawer={(e) => setOpenDrawer(e)}
              name={"Banco de Textos"}
              tabs={banco}
            />
          </ListItem>
          <Divider style={{ background: "white", opacity: 0.5 }} />
          <ListItem className={classes.drawerBusquedaAv}>
            Busqueda Avançada
          </ListItem>
        </List>
      </SwipeableDrawer>

      <div className={classes.drawerIconContainer}>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
          <MenuIcon className={classes.drawerIcon} />
        </IconButton>

        <Link to={home} underline={"none"}>
          <img className={classes.logo} src={logoMarca} alt="logo_marca"></img>
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
        <Box style={{ backgroundColor: "red" }}>
          <AppBar style={{ position: "fixed" }} color={"primary"}>
            <Container maxWidth={"xs"}>
              <Box height={"65px"} display="flex">
                <Box className={classes.movileSearchBar}>
                  <SearchBar />
                </Box>
                <Button onClick={handleCloseSearchBar}>
                  <HighlightOffIcon color={"secondary"} />
                </Button>
              </Box>
            </Container>
          </AppBar>
        </Box>
      ) : (
        <AppBar position="fixed">
          <Container maxWidth={"lg"}>
            <Toolbar className={classes.toolbar}>
              {matches ? drawer : tabs}
            </Toolbar>
          </Container>
        </AppBar>
      )}

      <div className={classes.divMargin} />
    </React.Fragment>
  );
};

export default Header;
