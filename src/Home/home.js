import React, { useEffect, useState } from "react";

import axios from "axios";

import { useHistory } from "react-router";

import { Paper, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

import CardMedia from "./cardMedia";
import { Connection } from "../Connection";
import heroImg from "../assets/default-bg-superhero-1.jpg";
import footer1 from "../assets/footer/footer1.png";
import footer2 from "../assets/footer/footer2.png";
import footer3 from "../assets/footer/footer3.png";
import footer4 from "../assets/footer/footer4.png";
import footer5 from "../assets/footer/footer5.png";
import footer6 from "../assets/footer/footer6.png";
import footer7 from "../assets/footer/footer7.png";

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: "center",
  },
  root: { backgroundColor: "black" },

  text: {
    ...theme.typography.footer,
    justifyContent: "center",

    color: "white",
  },

  heroSection: {
    //backgroundColor: theme.palette.primary.main,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "340px",

    "&::before": {
      content: "''",
      position: "absolute",
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px",
      backgroundImage: `url(${heroImg})`,
      backgroundSize: "cover",
      backgroundPosition: "top center",
      opacity: 0.4,
    },
  },
  heroTitle: {
    position: "relative",
    display: "flex",
    color: "white",
    justifyContent: "center",
    fontSize: "2em",
    //backgroundColor: "rgb(50, 3, 16)",
    opacity: 1,
    [theme.breakpoints.down("xs")]: { fontSize: "8vw" },
  },
  heroText: {
    position: "relative",
    display: "flex",
    color: "white",
    justifyContent: "center",
    fontSize: "1.2em",
    [theme.breakpoints.down("xs")]: { fontSize: "4vw" },
    // fontWeight: "600",
  },
  heroButton: {
    margin: "10px 0px 0px 0px",
    // maxWidth: "120px",
    //width: "15%",
    position: "relative",
    display: "flex",

    justifyContent: "center",
  },
  heroContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  newsSecction: {
    backgroundColor: "#eaeaea",
  },
  newsDisplay: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  cardItem: { padding: "25px" },
  boxSpace: { height: "2em" },
  apoioSection: {
    backgroundColor: "rgb(200,200,200)",
    minheight: "340px",
    display: "flex",
    flexDirection: "column",

    justifyContent: "center",
    alignItems: "center",
  },

  advanceButton: { display: "flex", justifyContent: "center", margin: "20px" },
  linkItem: {
    height: "70px",
    padding: "10px",
    filter: "grayscale(0%)",
    "&:hover": { filter: "grayscale(0%)" },
  },
  iconContainer: {
    marginTop: "20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  apoioText: {
    ...theme.typography.footer,
    fontSize: "1.5rem",
    //paddingTop: "20px",
    //color: theme.palette.common.white,
    opacity: 0.7,
  },
  BoxSeparator: { height: "20px" },
}));

export default function PaginaInicial() {
  const history = useHistory();
  const theme = useTheme();
  const breakPointXs = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles();
  const [news, setNews] = useState([]);
  const [lastNew, setLastNew] = useState([]);

  const apoio = [
    {
      name: "Centro de Cultura, Linguagens e Tecnologias Aplicadas",
      src: footer1,
      xs: 1,
      link: "https://ufrb.edu.br/cecult/",
    },
    {
      name: "Cineclube Guido Araujo",
      src: footer2,
      xs: 1,
      link: "https://www.facebook.com/cineclubeguidoaraujo/",
    },
  ];

  const apoioFinanceiro = [
    {
      name: "FUNDACAO CULTURAL ESTADO DA BAIA",
      src: footer3,
      xs: 1,
      link: "http://www.fundacaocultural.ba.gov.br/",
    },
    {
      name: "Fundo de Cultura",
      src: footer4,
      xs: 1,
      link: "http://www.cultura.ba.gov.br/modules/conteudo/conteudo.php?conteudo=40",
    },
    {
      name: "Secretaria da Fazenda",
      src: footer5,
      xs: 1,
      link: "https://www.sefaz.ba.gov.br/",
    },
    {
      name: "Secretaria da Cultura",
      src: footer6,
      xs: 1,
      link: "http://www.cultura.ba.gov.br",
    },

    {
      name: "BAHIA GOVERNO DO ESTADO",
      src: footer7,
      xs: 1,
      link: "http://www.bahia.ba.gov.br/",
    },
  ];

  //console.log(Connection.api);

  useEffect(() => {
    axios.get(`${Connection.api}/news`).then((res) => {
      let tempData = [];

      res.data.forEach((el, indx) => {
        return el["sts_destaque"] === 1
          ? (() => {
              let tempEl = { ...el };
              tempEl["link"] = `news/${indx}`;
              return tempData.push(tempEl);
            })()
          : null;
      });

      setLastNew(tempData.pop());
      return setNews(tempData);
    });
  }, []);
  console.log(news);
  console.log(lastNew);

  return (
    <div className={classes.root}>
      <Box className={classes.heroSection}>
        <Container maxWidth={"md"}>
          {news[0] ? (
            <Box className={classes.heroContainer}>
              <Typography className={classes.heroTitle}>
                {lastNew["des_titulo"]}
              </Typography>
              <Typography className={classes.heroText}>
                {lastNew["des_release"]}
              </Typography>
            </Box>
          ) : null}
        </Container>
        {news[0] ? (
          <Box className={classes.heroContainer}>
            <Button
              className={classes.heroButton}
              fullWidth={false}
              variant="contained"
              color="primary"
              href={lastNew["link"]}
            >
              SAIBA MAIS
            </Button>
          </Box>
        ) : null}
      </Box>
      <Box className={classes.newsSecction}>
        <Box className={classes.boxSpace} />
        <Container maxWidth={"lg"}>
          <Box className={classes.newsDisplay}>
            {news[0]
              ? news.map((el) => {
                  return (
                    <Box className={classes.cardItem}>
                      <CardMedia
                        photo={el.des_foto}
                        photoThumb={el.des_foto_p}
                        key={el.des_titulo}
                        title={el.des_titulo}
                        text={el.des_text}
                        release={el.des_release}
                        date={el.date}
                        link={el.link}
                      />
                    </Box>
                  );
                })
              : null}
          </Box>
        </Container>
        <Box className={classes.boxSpace} />
      </Box>
      <Box className={classes.apoioSection}>
        <Box className={classes.BoxSeparator}></Box>
        <Typography className={classes.apoioText}>Apoio:</Typography>
        <Container className={classes.iconContainer}>
          {apoio.concat(apoioFinanceiro).map((el) => {
            return (
              <Link key={el.name} to={el.link}>
                <img className={classes.linkItem} src={el.src}></img>
              </Link>
            );
          })}
        </Container>
        <Box className={classes.BoxSeparator}></Box>
      </Box>
    </div>
  );
}
