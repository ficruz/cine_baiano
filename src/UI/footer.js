import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

import footer1 from "../assets/footer/funceb.jpg";
import footer2 from "../assets/footer/govbahialogo.jpg";
import footer3 from "../assets/footer/ufrb.jpg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.black,
    width: "100%",
    color: theme.palette.common.white,
    marginTop: "20px",
  },
  imgfooter: {
    borderRadius: "5%",
    [theme.breakpoints.down("xl")]: { height: "5vh" },
  },

  text: {
    ...theme.typography.footer,
    color: theme.palette.common.white,
    display: "flex",
    marginTop: "1em",
    justifyContent: "center",
    padding: "1em",
  },
}));
export default function Footer() {
  const classes = useStyles();

  const gridElements = [
    {
      name: "FUNDACAO CULTURAL ESTADO DA BAIA",
      src: footer1,
      xs: 1,
      link: "http://www.fundacaocultural.ba.gov.br/",
    },

    {
      name: "BAHIA GOVERNO DO ESTADO",
      src: footer2,
      xs: 1,
      link: "http://www.bahia.ba.gov.br/",
    },
    {
      name: "CECULT UFBR",
      src: footer3,
      xs: 1,
      link: "https://ufrb.edu.br/cecult/",
    },
  ];

  return (
    <footer className={classes.footer}>
      <Grid container spacing={5} justify="center" alignItems="center">
        <Typography variant={"h6"}> Apoio: </Typography>
        {gridElements.map((el, index) => (
          <Grid
            item
            key={el.name}
            component={"a"}
            href={`${el.link}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className={classes.imgfooter}
              alt={`${el.src}`}
              src={el.src}
            ></img>
          </Grid>
        ))}
      </Grid>
      <div className={classes.text}>
        Designed and built with all the love in the world by Fidev. 2021
      </div>
    </footer>
  );
}
