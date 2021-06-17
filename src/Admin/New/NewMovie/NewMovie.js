import React, { useState, useEffect } from "react";

import { useParams, useHistory, Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Typography, Dialog, DialogTitle } from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { Divider } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { FormControl, FormControlLabel, Switch } from "@material-ui/core";

import "react-datetime/css/react-datetime.css";

import axios from "axios";
import { Connection } from "../../../Connection";

import WindowedSelect from "react-windowed-select";
import { components, createFilter } from "react-windowed-select";

import MovieForm from "./components/MovieForm";

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
    des_nome_filme: null,
    des_nome_filme_alternativo: null,
    des_fonte: null,
    dtc_lancamento: null,
    des_observacao: null,
    des_material_original: null,
    des_origem: null,
    des_contato: null,
    cod_genero_filme: null,
    sts_colorido: null,
    sts_peb: null,
    cod_tipo_metragem: null,
    sts_mudo: null,
    num_ano_producao: null,
    num_ano_lancamento: null,
    des_sinopse: null,
    des_critica: null,
    des_premio: null,
    des_copia_disponivel: null,
    des_link: null,
    des_credito_completo: null,
    sts_destaque: null,
    des_censura: null,
    des_locacao: null,
    des_etreia: null,
  });

  const [pessoa, setPessoa] = useState([]);
  const [tempPessoa, setTempPessoa] = useState({});

  const [photo, setPhoto] = useState([]);
  const [tempPhoto, setTempPhoto] = useState({ sts_cartaz: false });
  const [posterButton, setPosterButton] = useState(false);

  const [initialData, setInitialData] = useState([]);

  const [lastMovieID, setLastMovieID] = useState({});
  const [lastPersonID, setLastPersonID] = useState({});

  const [photoInputKey, setPhotoInputKey] = useState("");
  const [personInputKey, setPersonInputKey] = useState(0);

  const classes = useStyle();

  let { id } = useParams();

  const customFilter = createFilter({ ignoreAccents: false });
  const customComponents = {
    ClearIndicator: (props) => (
      <components.ClearIndicator {...props}>clear</components.ClearIndicator>
    ),
  };

  useEffect(() => {
    axios({ method: "get", url: `${Connection.api}/movies/InitialData` })
      .then((res) => {
        console.log(res.data);
        setLastMovieID(res.data.cod_filme[0]);
        setLastPersonID(res.data.cod_pessoa[0].cod_pessoa);

        return setInitialData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // ---------------------------------------------------------------------------------------------------------------------------------------

  const sendRequestHandler = () => {
    // if (
    //   !info.des_nome_filme ||
    //   !info.cod_genero_filme ||
    //   !info.sts_colorido ||
    //   !info.sts_peb ||
    //   !info.cod_tipo_metragem ||
    //   !info.sts_mudo ||
    //   !info.num_ano_lancamento
    // ) {
    //   return alert("lembre-se de incluir todos os campos obrigatórios");
    // }

    //console.log(info);

    axios({
      method: "post",
      url: `${Connection.api}/movies/new`,
      data: {
        info: info,
        pessoa: pessoa,
        photo: photo,
        lastMovieID: lastMovieID,
      },
    })
      .then((res) => {
        console.log(res.data);
        // setNewID(res.data.insertId);
        //handleClickOpen();
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

  const newPersonHandler = (prop) => (event) => {
    setTempPessoa({
      ...tempPessoa,
      [`${prop}`]: event.value,
      [`${prop}_label`]: event.label,
    });
  };

  const addNewPersonHandler = () => {
    if (!tempPessoa.cod_pessoa || !tempPessoa.cod_subcategoria) {
      return alert("lembre-se de incluir pelo menos um nome e função");
    }
    //console.log(lastPersonID + 1);
    // Person SQL code Counter
    //setLastPersonID(lastPersonID + 1);

    // Reset to the inputs
    setPersonInputKey(Math.random());

    setPessoa([...pessoa, tempPessoa]);

    return setTempPessoa({});
  };

  const removePersonHandler = (indx) => {
    const tempPessoa = [...pessoa];
    tempPessoa.splice(indx, 1);

    return setPessoa([...tempPessoa]);
  };

  const setDateHandler = (event) => {
    // console.log(event.format("YYYY-MM-DD HH:mm:ss"));
    setInfo({
      ...info,
      ["dtc_lancamento"]: event.format("YYYY-MM-DD HH:mm:ss"),
    });
  };

  const addImageHandler = () => {
    if (tempPhoto["sts_cartaz"]) {
      setPosterButton(true);
    }

    //Define new key to reset input
    setPhotoInputKey(`${Math.random()}`);
    setPhoto([...photo, tempPhoto]);

    return setTempPhoto({ sts_cartaz: false });
  };

  const setTempPhotoHandler = (prop) => (event) => {
    prop === "sts_cartaz"
      ? setTempPhoto({ ...tempPhoto, [`${prop}`]: event.target.value })
      : setTempPhoto({ ...tempPhoto, [`${prop}`]: event.target.files[0].name });
  };

  const removeImageHandler = (indx) => {
    let temp_photo = [...photo];
    let deletedItem = temp_photo.splice(indx, 1);
    console.log(deletedItem[0]["sts_cartaz"]);
    if (deletedItem[0]["sts_cartaz"]) {
      setPosterButton(false);
    }
    return setPhoto([...temp_photo]);
  };

  const posterButtonHandle = (event) => {
    return setTempPhoto({
      ...tempPhoto,
      ["sts_cartaz"]: event.target.checked,
    });
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
          <Typography className={classes.title} variant="h6">
            Informação do Filme
          </Typography>

          <MovieForm
            setInfoHandler={setInfoHandler}
            setDateHandler={setDateHandler}
          />

          <FormControl>
            <Box className={classes.boxSeparator}></Box>

            <Divider />
            <Box className={classes.boxSeparator}></Box>
            <Typography className={classes.title} variant="h6">
              Carregar Novas Imagens do Banco de Dados
            </Typography>

            <Box className={classes.boxSeparator}></Box>

            {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}

            <Typography>Versão Grande</Typography>
            <input
              type="file"
              id="input_file"
              key={photoInputKey}
              onChange={setTempPhotoHandler("large")}
            />

            <Box className={classes.boxSeparator}></Box>

            <Typography>Versão Pequena</Typography>
            <input
              type="file"
              key={photoInputKey - 2}
              onChange={setTempPhotoHandler("thumb")}
            />

            <Box className={classes.boxSeparator}></Box>

            <FormControlLabel
              control={
                <Switch
                  checked={tempPhoto.sts_cartaz}
                  onChange={posterButtonHandle}
                  name="checkedB"
                  color="primary"
                  disabled={posterButton}
                />
              }
              label="Cartaz"
            />

            <Box className={classes.boxSeparator}></Box>

            <button onClick={() => addImageHandler()}> Adicionar Imagem</button>

            <Box className={classes.boxSeparator}></Box>

            {photo.map((el, indx) => {
              return (
                <p key={indx} id={indx}>
                  {el["large"]} - {el["thumb"]}{" "}
                  {el["sts_cartaz"] ? "--CARTAZ--" : null}{" "}
                  <button onClick={() => removeImageHandler(indx)}>x</button>
                </p>
              );
            })}

            <Box className={classes.boxSeparator}></Box>
            <Typography>
              * Observação: Atualmente, essas imagens estão sendo modificadas
              APENAS no banco de dados SQL, e não no servidor de fotos AWS. Este
              último precisa ser modificado manualmente.
            </Typography>
            <Box className={classes.boxSeparator}></Box>

            <Divider />

            <Box className={classes.boxSeparator}></Box>

            <Typography className={classes.title} variant="h6">
              Pessoas
            </Typography>

            <Box className={classes.boxSeparator}></Box>

            <Typography> Pessoa </Typography>

            {initialData ? (
              <WindowedSelect
                components={customComponents}
                filterOption={customFilter}
                options={initialData.pessoa}
                isClearable={true}
                name="pessoa"
                key={personInputKey + 4}
                onChange={newPersonHandler("cod_pessoa")}
              ></WindowedSelect>
            ) : (
              <p>Loading</p>
            )}
            <Box className={classes.boxSeparator} />

            <Typography variant="body1">
              * Caso a pessoa não esteja na lista adicione-a:{" "}
              <Link to="/new/people">Adicionar Pessoas</Link>
            </Typography>
            <Box className={classes.boxSeparator}></Box>

            <Typography>Função (Obrigatório) </Typography>

            {initialData ? (
              <WindowedSelect
                components={customComponents}
                filterOption={customFilter}
                options={initialData.subcategoria}
                isClearable={true}
                name="subcategoria"
                key={personInputKey + 3}
                onChange={newPersonHandler("cod_subcategoria")}
              ></WindowedSelect>
            ) : (
              <p>Loading</p>
            )}
            <Box className={classes.boxSeparator} />

            <button onClick={addNewPersonHandler}>Adicionar Pessoa</button>
            <Box className={classes.boxSeparator} />

            {pessoa.map((el, indx) => {
              return (
                <p key={indx}>
                  {el.cod_pessoa_label} - {el.cod_subcategoria_label}{" "}
                  <button onClick={() => removePersonHandler(indx)}>x</button>
                </p>
              );
            })}
          </FormControl>
          <Box className={classes.boxSeparator} />

          {/* ------------------------------------------------------------------------------------------------------------------------ */}
          <button onClick={() => console.log(tempPessoa)}>Show People</button>
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
      <SimpleDialog open={open} onClose={handleClose} />
    </React.Fragment>
  );
}
