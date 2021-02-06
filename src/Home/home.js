import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import astrogildo from "../assets/CARROUSEL/astrogildo.jpg";
import eclipse from "../assets/CARROUSEL/eclipse.jpg";
import travessia from "../assets/CARROUSEL/travessia.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: "center",
  },
  paper: { backgroundColor: theme.palette.common.black },
  spacediv: { height: "10vh" },
  text: {
    ...theme.typography.footer,
    justifyContent: "center",

    color: "white",
  },

  divider: {
    backgroundColor: theme.palette.secondary.main,
    width: "40px",
    height: "4px",
  },
  title: {
    paddingTop: "3em",
    paddingBottom: "2em",
    marginLeft: "1em",
  },
}));

export default function PaginaInicial() {
  const theme = useTheme();
  const breakPointXs = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles();

  var items = [
    {
      codfilme: "1947",
      alt: "astrogildo",
      img: astrogildo,
    },
    {
      codfilme: "3016",
      alt: "travessia",
      img: travessia,
    },
    {
      codfilme: "1946",
      alt: "eclipse",
      img: eclipse,
    },
  ];

  return (
    <div className={classes.paper}>
      <Container maxWidth={"lg"} className={classes.container}>
        {breakPointXs ? (
          <div className={classes.title}>
            <Typography className={classes.text} variant={"h6"}>
              Filmografia Bahiana
            </Typography>
            <div className={classes.divider}></div>
          </div>
        ) : (
          <div className={classes.title}></div>
        )}

        <Carousel navButtonsAlwaysVisible={true}>
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </Container>
      <div className={classes.spacediv}></div>
    </div>
  );
}

function Item(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Link to={`/busquedaavancada/codfilme/${props.item.codfilme}`}>
        <Button disableRipple>
          <img alt={props.alt} src={props.item.img} width={"100%"}></img>
        </Button>
      </Link>
    </Paper>
  );
}
