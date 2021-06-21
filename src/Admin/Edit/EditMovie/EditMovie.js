import React, { useState } from "react";
import axios from "axios";
import "react-datetime/css/react-datetime.css";
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import SuccessDialog from "./components/SimpleDialog";
import MovieForm from "./components/MovieForm";

import { Connection } from "../../../Connection";

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
  title: { display: "flex", justifyContent: "center" },
}));

export default function EditNews() {
  let history = useHistory();
  const location = useLocation();

  console.log(location);

  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    des_nome_filme: location.state.Nome,
    des_nome_filme_alternativo: location.state.NomeAlternativo,
    des_fonte: location.state.des_fonte,
    dtc_lancamento: location.state.dtc_lancamento,
    des_observacao: location.state.des_observacao,
    des_material_original: location.state.Material_Original,
    des_origem: location.state.Origem,
    des_contato: location.state.des_contato_string,
    cod_genero_filme: location.state.cod_genero_filme,
    sts_colorido: location.state.Colorido,
    sts_peb: location.state.sts_peb,
    cod_tipo_metragem: location.state.cod_tipo_metragem,
    sts_mudo: location.state.sts_mudo,
    num_ano_producao: location.state.Ano_Producao,
    num_ano_lancamento: location.state.Ano_Lancamento,
    des_sinopse: location.state.des_sinopse,
    des_critica: location.state.des_critica_string,
    des_premio: location.state.des_premio,
    des_copia_disponivel: location.state.des_copia_disponivel,
    des_link: location.state.des_link_string,
    des_credito_completo: location.state.Elenco_string,
    sts_destaque: location.state.sts_destaque,
    des_censura: location.state.des_censura,
    des_locacao: location.state.Locacao,
    des_etreia: location.state.Estreia,
  });

  const movieID = location.state.movieCode;
  const classes = useStyle();

  const sendRequestHandler = () => {
    axios({
      method: "patch",
      url: `${Connection.api}/movies/edit`,
      data: {
        info: info,
        movieID: movieID,
      },
    })
      .then((res) => {
        console.log(res.data);

        handleOpenDialog();
      })
      .catch((err) => console.log(err));
  };

  const setInfoHandler = (props) => (event) => {
    return (event.target.name === "cod_genero_filme") |
      (event.target.name === "cod_tipo_metragem") |
      (event.target.name === "num_ano_producao") |
      (event.target.name === "num_ano_lancamento")
      ? setInfo({ ...info, [props]: parseInt(event.target.value) })
      : setInfo({ ...info, [props]: event.target.value });
  };

  const setDateHandler = (event) => {
    setInfo({
      ...info,
      ["dtc_lancamento"]: event.format("YYYY-MM-DD HH:mm:ss"),
    });
  };

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    return history.push(`/aboutmovie?movieCode=${movieID}`);
  };

  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Box className={classes.root}>
          <Box className={classes.boxSeparator}></Box>
          <Typography className={classes.title} variant="h6">
            Informação do Filme
          </Typography>

          <MovieForm
            info={info}
            setInfoHandler={setInfoHandler}
            setDateHandler={setDateHandler}
          />

          <Box className={classes.boxSeparator} />

          {/* ------------------------------------------------------------------------------------------------------------------------ */}

          <Divider />
          <Box className={classes.boxSeparator} />

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
                  // console.log(photo);
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
                  history.goBack();
                }
              }}
            >
              Desfazer
            </button>
          </Box>
        </Box>
      </Container>
      <SuccessDialog open={open} onClose={handleCloseDialog} />
    </React.Fragment>
  );
}
