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
    backgroundImage: `url("https://filmografiabaiana.s3.sa-east-1.amazonaws.com/hero_movie_op_07_comp.jpg")`,
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
      "https://filmografiabaiana.s3.sa-east-1.amazonaws.com/ca.jpg",
      "https://filmografiabaiana.s3.sa-east-1.amazonaws.com/cb.jpg",
      "https://filmografiabaiana.s3.sa-east-1.amazonaws.com/cc.jpg",
      "https://filmografiabaiana.s3.sa-east-1.amazonaws.com/cd.jpg",
      "https://filmografiabaiana.s3.sa-east-1.amazonaws.com/ck.jpg",
      "https://filmografiabaiana.s3.sa-east-1.amazonaws.com/cf.jpg",
      "https://filmografiabaiana.s3.sa-east-1.amazonaws.com/cg.jpg",
      "https://filmografiabaiana.s3.sa-east-1.amazonaws.com/ch.jpg",
      "https://filmografiabaiana.s3.sa-east-1.amazonaws.com/ci.jpg",
      "https://filmografiabaiana.s3.sa-east-1.amazonaws.com/cj.jpg",
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
          backgroundImage: `url("https://filmografiabaiana.s3.sa-east-1.amazonaws.com/hero_movie_op_07_comp.jpg")`,
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
