import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/styles";

import Axios from "axios";

import { useParams, Link, useHistory } from "react-router-dom";

import { Connection } from "../Connection";

import axios from "axios";

import { Box, Dialog } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Alert, AlertTitle } from "@material-ui/lab";

import { useOktaAuth } from "@okta/okta-react/";

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

const useStyles = makeStyles((theme) => ({
  //title: { fontWeight: 400, fontSize: "2rem" },
  newsInfo: {
    marginTop: "5rem",
    marginBottom: "5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  text: { fontWeight: 300, marginBottom: "1em" },
  date: { fontSize: "1rem", fontWeight: 300, color: "white" },
  spaceBox: { height: "20px" },
  adminButtons: {
    display: "flex",
    justifyContent: "center",
  },
  adminButtonsIcon: { margin: theme.spacing(1) },
  adminButtonsIconAdd: { backgroundColor: "green", margin: theme.spacing(1) },
  title: {
    fontSize: "3rem",
    fontWeight: 600,
    color: "white",
    // display: "flex",
    //justifyContent: "center",
    //padding: "1em",
    //marginTop: "40px",
    //marginBottom: "40px",
  },
  hero1: {
    // minHeight: "340px",
    // maxWidth: "1920px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    //alignContent: "center",
    alignItems: "center",
  },
}));

function SimpleDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <Alert severity="success">
        <AlertTitle>Sucesso!</AlertTitle>
      </Alert>
    </Dialog>
  );
}

export default function News() {
  const { authState, oktaAuth } = useOktaAuth();
  const [newsData, setNewsData] = useState([]);
  const [open, setOpen] = useState(false);
  const [background, setBackground] = useState({
    backgroundImage: `url(${heroa})`,
  });
  const [key, setKey] = useState(1);

  let history = useHistory();
  let id = useRef(0);
  let currentid = id.current;
  let lastID = useRef(0);
  let tempid = useParams().id;

  const classes = useStyles();

  useEffect(() => {
    Axios.get(`${Connection.api}/news?id=${id}`).then((res) => {
      lastID.current = res.data.length - 2;

      if (
        (window.location.href === "http://localhost:3000/news/") |
        (window.location.href === "http://localhost:3000/news") |
        (tempid > res.data.length - 1)
      ) {
        id.current = res.data.length - 1;
      } else {
        id.current = tempid;
      }

      return setNewsData(res.data);
    });
  }, [tempid]);

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

    setBackground({
      backgroundImage: `url(${backgroundImage[rand]})`,
      backgroundSize: "cover",
      height: "340px",
      position: "relative",
    });
    return setKey(currentid);
  }, [currentid]);

  const sendDeleteRequestHandler = () => {
    axios({
      method: "patch",
      url: `${Connection.api}/news/delete`,
      data: {
        cod_noticia: newsData[id.current]["cod_noticia"],
      },
    })
      .then((res) => {
        console.log(res.data);

        handleClickOpen();
      })
      .catch((err) => console.log(err));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    console.log(lastID.current);
    return history.push(`/news/${lastID.current}`);
  };

  return (
    <React.Fragment>
      {newsData[0] ? (
        <Box key={key} style={background} className={classes.hero1}>
          <Container maxWidth="md">
            <Typography className={classes.title}>
              {newsData[id.current]["des_titulo"]}
            </Typography>
            <Typography className={classes.date}>
              {newsData[id.current]["date"]}
            </Typography>
          </Container>
        </Box>
      ) : null}

      <Container maxWidth="md">
        {newsData[0] ? (
          <Box className={classes.newsInfo}>
            {" "}
            <Box className={classes.spaceBox}></Box>
            <Box>
              {newsData[id.current]["des_texto"]
                .split("\n")
                .map((el, index) => (
                  <Typography key={`${el}${index}`} className={classes.text}>
                    {el}
                  </Typography>
                ))}{" "}
            </Box>
            <Box className={classes.spaceBox}></Box>
            {authState.isAuthenticated ? (
              <Box className={classes.adminButtons}>
                <Fab
                  color="primary"
                  className={classes.adminButtonsIconAdd}
                  aria-label="add"
                  onClick={() =>
                    history.push({
                      pathname: `/New/News/${id.current}`,
                    })
                  }
                >
                  <AddIcon />
                </Fab>

                <Fab
                  color={"secondary"}
                  className={classes.adminButtonsIcon}
                  aria-label="edit"
                  onClick={() =>
                    history.push({
                      pathname: `/Edit/News/${id.current}`,
                      state: newsData[id.current],
                    })
                  }
                >
                  <EditIcon />
                </Fab>

                <Fab
                  color="primary"
                  className={classes.adminButtonsIcon}
                  aria-label="delete"
                  onClick={(e) => {
                    if (
                      !window.confirm(
                        "Tem certeza de que deseja DELETAR a entrada?"
                      )
                    ) {
                      e.preventDefault();
                    } else {
                      sendDeleteRequestHandler();
                    }
                  }}
                >
                  <DeleteForeverIcon />
                </Fab>
              </Box>
            ) : null}
            <Box className={classes.spaceBox}></Box>
            <Divider />
            <Box>
              <Box className={classes.spaceBox}></Box>
              {newsData.map((el, index) => (
                <Typography key={`${el.des_titulo}-${index}`}>
                  <Link to={`/news/${index}`} color="inherit">
                    {el.date}
                    {"  "}
                    {el.des_titulo}
                  </Link>
                </Typography>
              ))}
              <Box className={classes.spaceBox}></Box>
            </Box>
          </Box>
        ) : (
          <h6>Loading</h6>
        )}
      </Container>
      <SimpleDialog open={open} onClose={handleClose} />
    </React.Fragment>
  );
}
