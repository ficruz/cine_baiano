import React, { useState } from "react";

import { useParams, useLocation, useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Typography, Dialog, DialogTitle } from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { Divider, Switch } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

import axios from "axios";
import { Connection } from "../../Connection";

const useStyle = makeStyles((theme) => ({
  root: {},
  bodyForm: { width: "100%" },
  boxSeparator: { height: "20px" },
  buttonSection: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  buttonItem: { marginLeft: "20px" },
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

export default function EditNews() {
  //const newsInfo = useLocation().state;
  let history = useHistory();

  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    des_titulo: null,
    cod_noticia: null,
    date: null,
    des_release: null,
    des_texto: null,
    des_foto: null,
    des_foto_p: null,
    sts_destaque: null,
    sts_ativo: null,
  });
  const [newID, setNewID] = useState(null);

  const classes = useStyle();
  //console.log(info);

  let { id } = useParams();

  //console.log(newsInfo);
  //console.log(Connection.api);

  const sendRequestHandler = () => {
    //console.log(info);

    axios({
      method: "post",
      url: `${Connection.api}/news/new`,
      data: { info: info },
    })
      .then((res) => {
        console.log(res.data);
        setNewID(res.data.insertId);
        handleClickOpen();
      })
      .catch((err) => console.log(err));
  };

  const setInfoHandler = (props) => (event) => {
    // console.log(event.target.name);
    // console.log(event.target.value);
    return (event.target.name === "ativo") | (event.target.name === "destaque")
      ? setInfo({ ...info, [props]: parseInt(event.target.value) })
      : setInfo({ ...info, [props]: event.target.value });
  };

  const setImageHandler = (props) => (event) => {
    return setInfo({ ...info, [props]: event.target.files[0].name });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    return history.push(`/news/`);
  };

  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Box className={classes.root}>
          <Box className={classes.boxSeparator}></Box>

          <form>
            <Typography>Titulo</Typography>
            <TextareaAutosize
              className={classes.bodyForm}
              rowsMax={10}
              aria-label="Titulo"
              placeholder="Inserte Titulo (max 500 chars)"
              maxLength={500}
              onChange={setInfoHandler("des_titulo")}
              required
            />

            <Box className={classes.boxSeparator}></Box>

            <Typography>Pequena Descrição</Typography>
            <TextareaAutosize
              className={classes.bodyForm}
              rowsMax={10}
              aria-label="Pequena descrição"
              placeholder="Inserte Pequena descrição (max 700 chars)"
              maxLength={700}
              onChange={setInfoHandler("des_release")}
              required
            />

            <Box className={classes.boxSeparator}></Box>

            <Typography>Texto</Typography>
            <TextareaAutosize
              className={classes.bodyForm}
              rowsMax={15}
              aria-label="texto"
              placeholder="Inserte texto"
              onChange={setInfoHandler("des_texto")}
              required
            />
          </form>

          <Box className={classes.boxSeparator}></Box>
          <form>
            <Typography>Ativo</Typography>
            <input
              type="radio"
              id="at_yes"
              name="ativo"
              value={1}
              onChange={setInfoHandler("sts_ativo")}
            ></input>
            <label htmlFor="at_yes">Sim</label>

            <input
              type="radio"
              id="at_nao"
              name="ativo"
              value={0}
              onChange={setInfoHandler("sts_ativo")}
            ></input>
            <label htmlFor="at_nao">Nao</label>
          </form>

          <Box className={classes.boxSeparator}></Box>

          <form>
            <Typography>Destaque</Typography>
            <input
              type="radio"
              id="des_yes"
              name="destaque"
              value={1}
              onChange={setInfoHandler("sts_destaque")}
            ></input>
            <label htmlFor="des_yes">Sim</label>

            <input
              type="radio"
              id="des_nao"
              name="destaque"
              value={0}
              onChange={setInfoHandler("sts_destaque")}
            ></input>
            <label htmlFor="des_nao">Nao</label>
          </form>

          <Box className={classes.boxSeparator}></Box>

          <Divider />
          <Box className={classes.boxSeparator}></Box>

          <Typography>Carregar Nova Imagem do Banco de Dados</Typography>
          <input type="file" onChange={setImageHandler("des_foto")} />

          <Box className={classes.boxSeparator}></Box>

          <Typography>
            Carregar Nova Imagem (pequena) do Banco de Dados
          </Typography>
          <input type="file" onChange={setImageHandler("des_foto_p")} />

          <Box className={classes.boxSeparator}></Box>
          <Typography>
            * Observação: Atualmente, essas imagens estão sendo modificadas
            APENAS no banco de dados SQL, e não no servidor de fotos AWS. Este
            último precisa ser modificado manualmente.
          </Typography>
          <Box className={classes.boxSeparator}></Box>
          <Divider />
          <Box className={classes.boxSeparator}></Box>

          <Box className={classes.buttonSection}>
            <button
              onClick={(e) => {
                if (
                  !window.confirm(
                    "Tem certeza de que deseja modificar a entrada?"
                  )
                ) {
                  e.preventDefault();
                } else {
                  sendRequestHandler();
                }
              }}
            >
              Mandar
            </button>
            <button
              className={classes.buttonItem}
              onClick={(e) => {
                if (!window.confirm("Tem certeza de que deseja Desfazer?")) {
                  e.preventDefault();
                } else {
                  history.push(`/news/${id}`);
                }
              }}
            >
              Desfazer
            </button>
          </Box>
        </Box>
      </Container>
      <SimpleDialog open={open} onClose={handleClose} />
    </React.Fragment>
  );
}
