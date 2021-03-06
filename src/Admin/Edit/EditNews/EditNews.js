import React, { useState } from "react";

import { useParams, useLocation, useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { Divider } from "@material-ui/core";

import axios from "axios";
import { Connection } from "../../../Connection";

import SuccessDialog from "./SimpleDialog";

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

export default function EditNews() {
  const newsInfo = useLocation().state;
  let history = useHistory();

  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    des_titulo: newsInfo.des_titulo,
    cod_noticia: newsInfo.cod_noticia,
    date: newsInfo.date,
    des_release: newsInfo.des_release,
    des_texto: newsInfo.des_texto,
    des_foto: newsInfo.des_foto,
    des_foto_p: newsInfo.des_foto_p,
    sts_destaque: newsInfo.sts_destaque,
    sts_ativo: newsInfo.sts_ativo,
  });
  const classes = useStyle();

  let { id } = useParams();

  const sendRequestHandler = () => {
    axios({
      method: "patch",
      url: `${Connection.api}/news/edit`,
      data: { info: info },
    }).then((resp) => {
      handleClickOpen();
    });
  };

  const setInfoHandler = (props) => (event) => {
    return (event.target.name === "ativo") | (event.target.name === "destaque")
      ? setInfo({ ...info, [props]: parseInt(event.target.value) })
      : setInfo({ ...info, [props]: event.target.value });
  };

  const setImageHandler = (props) => (event) => {
    return setInfo({ ...info, [props]: event.target.files[0].name });
  };

  const deleteImageHandler = () => {
    return setInfo({ ...info, ["des_foto"]: null, ["des_foto_p"]: null });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    return history.push(`/news/${id}`);
  };

  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Box className={classes.root}>
          <Box className={classes.boxSeparator}></Box>

          <Typography>Titulo</Typography>
          <TextareaAutosize
            className={classes.bodyForm}
            rowsMax={10}
            aria-label="Titulo"
            placeholder="Inserte Titulo (max 500 chars)"
            defaultValue={newsInfo.des_titulo}
            maxLength={500}
            onChange={setInfoHandler("des_titulo")}
          />

          <Box className={classes.boxSeparator}></Box>

          <Typography>Pequena Descrição</Typography>
          <TextareaAutosize
            className={classes.bodyForm}
            rowsMax={10}
            aria-label="Pequena descrição"
            placeholder="Inserte Pequena descrição (max 700 chars)"
            defaultValue={newsInfo.des_release}
            maxLength={700}
            onChange={setInfoHandler("des_release")}
          />

          <Box className={classes.boxSeparator}></Box>

          <Typography>Texto</Typography>
          <TextareaAutosize
            className={classes.bodyForm}
            rowsMax={15}
            aria-label="texto"
            placeholder="Inserte texto"
            defaultValue={newsInfo.des_texto}
            onChange={setInfoHandler("des_texto")}
          />

          <Box className={classes.boxSeparator}></Box>
          <form>
            <Typography>Ativo</Typography>
            <input
              type="radio"
              id="at_yes"
              name="ativo"
              checked={info.sts_ativo}
              value={1}
              onChange={setInfoHandler("sts_ativo")}
            ></input>
            <label htmlFor="at_yes">Sim</label>

            <input
              type="radio"
              id="at_nao"
              name="ativo"
              checked={!info.sts_ativo}
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
              checked={info.sts_destaque}
              value={1}
              onChange={setInfoHandler("sts_destaque")}
            ></input>
            <label htmlFor="des_yes">Sim</label>

            <input
              type="radio"
              id="des_nao"
              name="destaque"
              checked={!info.sts_destaque}
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
          <Typography>Deletar Imagem Anterior do Banco de Dados</Typography>
          <button onClick={() => deleteImageHandler()}> Deletar Imagem </button>

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
      <SuccessDialog open={open} onClose={handleClose}></SuccessDialog>
    </React.Fragment>
  );
}
