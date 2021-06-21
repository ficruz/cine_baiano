import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    color: theme.palette.common.white,
    display: "flex",
  },
  imgfooter: {
    borderRadius: "5%",
    [theme.breakpoints.down("xl")]: { height: "5vh" },
  },

  text: {
    ...theme.typography.footer,
    color: theme.palette.common.white,
    fontWeight: 300,

    padding: "0.8em",
  },

  dereitos: {
    marginRight: "auto",
    ...theme.typography.footer,
    color: theme.palette.common.white,
    fontWeight: 300,

    padding: "0.8em",
  },
}));
export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.dereitos}>
        {" "}
        Filmografia Baiana 2021. Todos os direitos reservados.
      </div>
      <div className={classes.text}>
        Designed and built with all the love in the world by Fidev. 2021
      </div>
    </footer>
  );
}
