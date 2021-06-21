import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

import parse from "html-react-parser";

import { Container, Typography } from "@material-ui/core";

import { Connection } from "../Connection";

import heroa from "../assets/hero/ca.jpg";
import herob from "../assets/hero/cb.jpg";
import heroc from "../assets/hero/cc.jpg";
import herod from "../assets/hero/cd.jpg";
import heroe from "../assets/hero/ck.jpg";
import herof from "../assets/hero/cf.jpg";
import herog from "../assets/hero/cg.jpg";
import heroh from "../assets/hero/ch.jpg";
import heroi from "../assets/hero/ci.jpg";
import heroj from "../assets/hero/cj.jpg";
import mainHero from "../assets/hero_movie_op_07_comp.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.tab,
    marginTop: "2em",
  },

  text: {
    fontSize: "1.2rem",
    fontWeight: 300,
    marginTop: "40px",
    marginBottom: "40px",
    [theme.breakpoints.down("xs")]: { fontSize: "1rem" },
  },
  title: {
    fontSize: "3rem",
    fontWeight: 600,
    color: "#fcf6df",
    [theme.breakpoints.down("xs")]: { fontSize: "8vw" },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  hero1: {
    display: "flex",

    alignItems: "center",
  },
}));

export default function InstitucionalContent() {
  const [initialData, setInitialData] = useState([]);
  const [background, setBackground] = useState({
    backgroundImage: `url(${mainHero})`,
  });
  const [key, setKey] = useState(1);
  const classes = useStyles();

  let { id } = useParams();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  useEffect(() => {
    axios.get(`${Connection.api}/api/Institutional`).then((res) => {
      // console.log(res.data);
      return setInitialData(res.data);
    });
  }, []);

  useEffect(() => {
    const backgroundImage = [
      heroa,
      herob,
      heroc,
      herod,
      heroe,
      herof,
      herog,
      heroh,
      heroi,
      heroj,
    ];
    const rand = Math.ceil(Math.random() * 10) - 1;

    !matches
      ? setBackground({
          backgroundImage: `url(${backgroundImage[rand]})`,
          backgroundSize: "cover",
          height: "340px",
          position: "relative",
        })
      : setBackground({
          backgroundImage: `url(${mainHero})`,
          backgroundSize: "cover",
          height: "340px",
          position: "relative",
        });

    return setKey(id);
  }, [id, matches]);

  // console.log(background);

  //{initialData[1]["des_texto_conteudo_institucional"]}
  return (
    <React.Fragment>
      <Box key={key} style={background} className={classes.hero1}>
        <Container className={classes.containerhero} maxWidth={"md"}>
          <Typography variant="h6" className={classes.title}>
            {initialData[0]
              ? parse(initialData[id]["des_titulo_conteudo_institucional"])
              : "Loading"}
          </Typography>
        </Container>
      </Box>
      <Container className={classes.root} maxWidth="md">
        <Typography variant="body1" className={classes.text}>
          {initialData[0]
            ? parse(initialData[id]["des_texto_conteudo_institucional"])
            : "Loading"}
        </Typography>
      </Container>
    </React.Fragment>
  );
}
