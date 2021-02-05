import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import Axios from "axios";

import Selector from "./selector";
import InputNome from "./inputText";
import ResultTable from "./resultTable";

const connection = "https://cine-baiano.herokuapp.com";

const useStyles = makeStyles((theme) => ({
  title: {
    ...theme.typography.tab,
    display: "flex",
    marginTop: "1em",
    marginLeft: "30px",
  },

  formControl: {
    margin: theme.spacing(2),
    minWidth: 170,
  },
  moreIcon: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function BusquedaAvancada(props) {
  const classes = useStyles();

  // ** Params from the URL to do an initial search.*/
  let simpleQueryParams = props.match.params;

  // ** State to save the form changes.*/
  const [nomeFilme, setNomeFilme] = useState("");
  const [cinemaMudo, setCinemaMudo] = useState("");
  const [generoFilme, setGeneroFilme] = useState("");
  const [tipoMetragem, setTipoMetragem] = useState("");
  const [tipoSoporte, setTipoSoporte] = useState("");
  const [anoLancamento, setAnoLancamento] = useState("");
  const [colorido, setColorido] = useState("");
  const [peb, setPeb] = useState("");
  const [pessoasEmpresas, setPessoasEmpresas] = useState("");
  const [origem, setOrigem] = useState("");
  const [fontes, setFontes] = useState("");
  const [observacao, setObservacao] = useState("");
  const [sinopse, setSinopse] = useState("");
  const [codFilme] = useState("%");

  //** Initial data state to fill the form */
  const [InitialData, setInitialData] = useState(null);

  //** State with the fetched search result */
  const [listaFiltrada, setListaFiltrada] = useState(null);

  // ** State to open more search options */
  const [open, setOpen] = useState(false);

  // ** fetch the movie search
  // @param {string} props with search options */
  const getQuery = (props) => {
    Axios.get(`${connection}/api/advancedsearch`, {
      params: props,
    }).then((response) => {
      console.log(response);

      setListaFiltrada(response.data);
    });
  };

  // **function to fill the form options */
  useEffect(() => {
    Axios.get(`${connection}/api/initialData`).then((response) => {
      return setInitialData(noSelectionHandler(response.data));
    });
  }, []);

  // ** function to include Blank option in the form selectors
  // @params {array} obj - initial data from API */
  const noSelectionHandler = (obj) => {
    const valuesGenero = [{ des_genero_filme: "" }, ...obj.generoFilme.values];
    const valuesMetragem = [
      { des_tipo_metragem: "" },
      ...obj.tipoMetragem.values,
    ];
    const valuesSoporte = [{ des_tipo_suporte: "" }, ...obj.tipoSoporte.values];

    const tempInitialData = { ...obj };
    tempInitialData.generoFilme.values = valuesGenero;
    tempInitialData.tipoMetragem.values = valuesMetragem;
    tempInitialData.tipoSoporte.values = valuesSoporte;

    return tempInitialData;
  };

  // ** function to search with url params at first render */
  useEffect(() => {
    let params = {
      sinopse: "",
      observacao: "",
      fontes: "",
      origem: "",
      pessoasempresas: "",
      peb: "",
      colorido: "",
      ano: "",
      nome: "",
      cinemamudo: "",
      genero: "",
      metragem: "",
      soporte: "",
      codfilme: "%",
    };

    switch (simpleQueryParams.pathParam1) {
      case "Nome":
        params.nome = simpleQueryParams.pathParam2;
        return getQuery(params);

      case "Ano":
        params.ano = simpleQueryParams.pathParam2;
        return getQuery(params);

      case "Diretor":
        params.pessoasempresas = simpleQueryParams.pathParam2;
        return getQuery(params);

      case "Sinopse":
        params.pessoasempresas = simpleQueryParams.pathParam2;
        return getQuery(params);

      case "codfilme":
        params.codfilme = simpleQueryParams.pathParam2;
        return getQuery(params);

      default:
        break;
    }
  }, [simpleQueryParams.pathParam1, simpleQueryParams.pathParam2]);

  return (
    <Container>
      <div className={classes.title}> Busqueda Avançada</div>

      <div>
        <FormControl className={classes.formControl}>
          <InputNome
            label={"Nome Do Filme"}
            name={"querybyname"}
            clicked={(nome) => setNomeFilme(nome)}
          ></InputNome>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputNome
            label={"Ano"}
            name={"ano_lancamento"}
            clicked={setAnoLancamento}
          ></InputNome>
        </FormControl>

        {InitialData ? (
          <FormControl className={classes.formControl}>
            <Selector
              InitialData={InitialData.generoFilme}
              currentValue={generoFilme}
              clicked={(value) => setGeneroFilme(value)}
            />
          </FormControl>
        ) : (
          <p>Cargando...</p>
        )}

        {InitialData ? (
          <FormControl className={classes.formControl}>
            <Selector
              InitialData={InitialData.tipoMetragem}
              currentValue={tipoMetragem}
              clicked={(value) => setTipoMetragem(value)}
            />
          </FormControl>
        ) : (
          <p>Cargando...</p>
        )}

        <FormControl className={classes.formControl}>
          <InputNome
            label={"Origem"}
            name={"origem"}
            clicked={setOrigem}
          ></InputNome>
        </FormControl>
      </div>
      <div className={classes.moreIcon}>
        <IconButton
          disableRipple={true}
          aria-label={"expand row"}
          size={"small"}
          onClick={() => {
            return setOpen(!open);
          }}
        >
          {open ? (
            <RemoveCircleOutlineIcon color="secondary" />
          ) : (
            <AddCircleOutlineIcon color="secondary" />
          )}
          {open ? (
            <p>
              &nbsp;<b>Menos opcoes de busqueda.</b>
            </p>
          ) : (
            <p>
              &nbsp;<b>Mais opcoes de busqueda.</b>
            </p>
          )}
        </IconButton>
      </div>
      <div>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">
              Cinema Mudo
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Cinema Mudo"
              value={cinemaMudo}
              onChange={(e) => setCinemaMudo(e.target.value)}
            >
              <MenuItem value={"S"}>Sem</MenuItem>
              <MenuItem value={"N"}>Nao</MenuItem>
            </Select>
          </FormControl>

          {InitialData ? (
            <FormControl className={classes.formControl}>
              <Selector
                InitialData={InitialData.tipoSoporte}
                currentValue={tipoSoporte}
                clicked={(value) => setTipoSoporte(value)}
              />
            </FormControl>
          ) : (
            <p>Cargando...</p>
          )}

          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel id="colorido">Colorido</InputLabel>
            <Select
              labelId="colorido"
              id="select-colorido"
              label="Colorido"
              value={colorido}
              onChange={(e) => setColorido(e.target.value)}
            >
              <MenuItem value={"S"}>Sem</MenuItem>
              <MenuItem value={"N"}>Nao</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel id="pyb">Preto e Branco</InputLabel>
            <Select
              labelId="pyb"
              id="select-pyb"
              label="Petro e Branco"
              value={peb}
              onChange={(e) => setPeb(e.target.value)}
            >
              <MenuItem value={"S"}>Sem</MenuItem>
              <MenuItem value={"N"}>Nao</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputNome
              label={"Pessoas/Empresas"}
              name={"pessoas_empresas"}
              clicked={setPessoasEmpresas}
            ></InputNome>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputNome
              label={"Fontes"}
              name={"fontes"}
              clicked={setFontes}
            ></InputNome>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputNome
              label={"Observaçao"}
              name={"observacao"}
              clicked={setObservacao}
            ></InputNome>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputNome
              label={"Sinopse"}
              name={"sinopse"}
              clicked={setSinopse}
            ></InputNome>
          </FormControl>
        </Collapse>
      </div>
      <div className={classes.moreIcon}>
        <Button
          className={classes.formControl}
          onClick={() => {
            setListaFiltrada(null);
            return getQuery({
              sinopse: sinopse,
              observacao: observacao,
              fontes: fontes,
              origem: origem,
              pessoasempresas: pessoasEmpresas,
              peb: peb,
              colorido: colorido,
              ano: anoLancamento,
              nome: nomeFilme,
              cinemamudo: cinemaMudo,
              genero: generoFilme,
              metragem: tipoMetragem,
              soporte: tipoSoporte,
              codfilme: codFilme,
            });
          }}
          variant="contained"
          color="secondary"
        >
          Buscar
        </Button>
      </div>

      <ResultTable listaFiltrada={listaFiltrada} />
    </Container>
  );
}
