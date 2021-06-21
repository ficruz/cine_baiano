import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Typography, Dialog } from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { Divider } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { FormControl } from "@material-ui/core";

import "react-datetime/css/react-datetime.css";

import axios from "axios";
import { Connection } from "../../Connection";

import WindowedSelect from "react-windowed-select";
import { components, createFilter } from "react-windowed-select";

const useStyle = makeStyles((theme) => ({
  root: { display: "flex", flexDirection: "column" },
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
  let history = useHistory();

  const [open, setOpen] = useState(false);

  const [pessoa, setPessoa] = useState([]);
  const [tempPessoa, setTempPessoa] = useState({
    des_pessoa: "",
    des_pessoa02: "",
    des_pessoa03: "",
  });

  const [initialData, setInitialData] = useState([]);

  const [lastPersonID, setLastPersonID] = useState({});

  const [personInputKey, setPersonInputKey] = useState(0);

  const classes = useStyle();

  const customFilter = createFilter({ ignoreAccents: false });
  const customComponents = {
    ClearIndicator: (props) => (
      <components.ClearIndicator {...props}>clear</components.ClearIndicator>
    ),
  };

  useEffect(() => {
    axios({ method: "get", url: `${Connection.api}/people/InitialData` })
      .then((res) => {
        setLastPersonID(res.data.cod_pessoa[0].cod_pessoa);

        return setInitialData(res.data.pessoa);
      })
      .catch((err) => console.log(err));
  }, []);

  const sendRequestHandler = () => {
    axios({
      method: "post",
      url: `${Connection.api}/people/new`,
      data: {
        pessoa: pessoa,
      },
    })
      .then((res) => {
        console.log(res.data);

        handleClickOpen();
      })
      .catch((err) => console.log(err));
  };

  const newPersonHandler = (prop) => (event) => {
    setTempPessoa({
      ...tempPessoa,
      ["cod_pessoa"]: lastPersonID + 1,
      [`${prop}`]: event.target.value,
    });
  };

  const addNewPersonHandler = () => {
    if (tempPessoa.des_pessoa === "") {
      return alert("lembre-se de incluir pelo menos um nome");
    }

    //console.log(lastPersonID + 1);
    // Person SQL code Counter
    setLastPersonID(lastPersonID + 1);

    // Reset Name the inputs
    setPersonInputKey(Math.random());

    //People List Array
    setPessoa([...pessoa, tempPessoa]);

    //Reset State
    return setTempPessoa({
      des_pessoa: "",
      des_pessoa02: "",
      des_pessoa03: "",
    });
  };

  const removePersonHandler = (indx) => {
    const tempPessoa = [...pessoa];
    tempPessoa.splice(indx, 1);

    return setPessoa([...tempPessoa]);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    return history.push(`/New/movie`);
  };

  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Box className={classes.root}>
          <Box className={classes.boxSeparator}></Box>

          <FormControl>
            <Box className={classes.boxSeparator}></Box>

            <Typography className={classes.title} variant="h6">
              Pessoas
            </Typography>

            <Typography> Procurar Pessoa </Typography>

            {initialData ? (
              <WindowedSelect
                components={customComponents}
                filterOption={customFilter}
                options={initialData}
                isClearable={true}
                name="subcategoria"
                key={personInputKey + 3}
              ></WindowedSelect>
            ) : (
              <p>Loading</p>
            )}

            <Box className={classes.boxSeparator}></Box>
            <Typography variant="body1">
              * Caso a pessoa não esteja na lista adicione-a
            </Typography>
            <Box className={classes.boxSeparator}></Box>

            <Divider></Divider>

            <Box className={classes.boxSeparator}></Box>

            <Typography className={classes.title} variant="h6">
              Adicionar Pessoas
            </Typography>

            <Box className={classes.boxSeparator}></Box>

            <Typography> Nome (Obrigatório)</Typography>

            <TextareaAutosize
              className={classes.bodyForm}
              rowsMax={2}
              aria-label="nome"
              name="nome"
              key={personInputKey}
              placeholder="Inserte Nome (Max. 200 char.)"
              maxLength={200}
              onChange={newPersonHandler("des_pessoa")}
            />
            <Box className={classes.boxSeparator}></Box>

            <Typography> Nome (versão 2)</Typography>

            <TextareaAutosize
              className={classes.bodyForm}
              rowsMax={2}
              aria-label="nome_2"
              name="nome_2"
              key={personInputKey + 1}
              placeholder="Inserte Nome (versão 2) (Max. 200 char.)"
              maxLength={200}
              onChange={newPersonHandler("des_pessoa02")}
            />
            <Box className={classes.boxSeparator}></Box>

            <Typography>Nome (versão 3)</Typography>

            <TextareaAutosize
              className={classes.bodyForm}
              rowsMax={2}
              aria-label="nome_3"
              name="nome_3"
              key={personInputKey + 2}
              placeholder="Inserte Nome (versão 3) (Max. 200 char.)"
              maxLength={200}
              onChange={newPersonHandler("des_pessoa03")}
            />
            <Box className={classes.boxSeparator}></Box>

            <Box className={classes.boxSeparator} />

            <button onClick={addNewPersonHandler}>Adicionar Pessoa</button>
            <Box className={classes.boxSeparator} />

            {pessoa.map((el, indx) => {
              return (
                <p key={indx}>
                  {el.des_pessoa}-
                  {el.des_pessoa02 ? `${el.des_pessoa02}-` : null}
                  {el.des_pessoa03 ? `${el.des_pessoa03}-` : null}
                  {el.subcatLabel}{" "}
                  <button onClick={() => removePersonHandler(indx)}>x</button>
                </p>
              );
            })}
          </FormControl>
          <Box className={classes.boxSeparator} />
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
                  sendRequestHandler();
                }
              }}
            >
              Mandar
            </button>
            <button
              className={classes.buttonItem}
              onClick={(e) => {
                history.goBack();
              }}
            >
              Retornar
            </button>
          </Box>
        </Box>
      </Container>
      <SimpleDialog open={open} onClose={handleClose} />
    </React.Fragment>
  );
}
