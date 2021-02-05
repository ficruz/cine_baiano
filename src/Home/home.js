import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import astrogildo from "../assets/CARROUSEL/astrogildo.jpg";
import eclipse from "../assets/CARROUSEL/eclipse.jpg";
import travessia from "../assets/CARROUSEL/travessia.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: "center",
  },
  paper: { backgroundColor: theme.palette.common.black },
  spacediv: { height: "10vh" },
  title: {
    ...theme.typography.tab,
    color: "white",
  },

  divider: {
    backgroundColor: theme.palette.secondary.main,
    width: "40px",
    height: "4px",
  },
}));

export default function PaginaInicial() {
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
      <div className={classes.spacediv}></div>
      <Container maxWidth={"lg"} className={classes.container}>
        <br />
        <br />
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
