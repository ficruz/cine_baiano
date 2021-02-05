import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import axios from "axios";

const connection = "https://cine-baiano.herokuapp.com";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  divMoreInfo: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: theme.palette.secondary.main,
  },
  celldiv: { margin: theme.spacing(1), minWidth: 450 },
}));

//** function to fill a row in the table
// @params {obj} props - obj with basic info about a certain movie */
function Row(props) {
  const classes = useStyles();
  const { row } = props;
  // **State to open more info
  const [open, setOpen] = React.useState(false);
  // **State more info about a specific movie
  const [data, setData] = React.useState(null);

  //** fetch more info about a movie */
  const fetchData = async (cod_filme) => {
    const resp = await axios.get(`${connection}/api/aboutfilme`, {
      params: { cod_filme: cod_filme },
    });
    setData(resp.data);
  };

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {
              fetchData(row.cod_filme);
              return setOpen(!open);
            }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <b>
            {row.Nome} ({row.Ano})
          </b>
        </TableCell>
        <TableCell align="right">{row.Genero}</TableCell>
        <TableCell align="right">{row.Metragem}</TableCell>
        <TableCell align="right">{row.Origem}</TableCell>
        <TableCell align="right">{row.Director}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              {data ? (
                <Paper className={classes.divMoreInfo}>
                  {data[0].Ano_Lancamento ? (
                    <div className={classes.celldiv}>
                      <b>Ano Lanҫamento: </b> {data[0].Ano_Lancamento}
                    </div>
                  ) : null}
                  {data[0].Ano_Producao ? (
                    <div className={classes.celldiv}>
                      <b>Ano Pruduҫao: </b> {data[0].Ano_Producao}
                    </div>
                  ) : null}
                  {data[0].Estreia ? (
                    <div className={classes.celldiv}>
                      <b>Ano Estréia: </b> {data[0].Ano_Estreia}
                    </div>
                  ) : null}
                  {data[0].Locacao ? (
                    <div className={classes.celldiv}>
                      <b>Locaҫoes: </b> {data[0].Locacao}
                    </div>
                  ) : null}
                  {data.map((el, i) => {
                    return (
                      <div
                        className={classes.celldiv}
                        key={`${el.des_subcategoria}${el.des_pessoa}${i}`}
                      >
                        <b>{el.des_subcategoria}: </b> {el.des_pessoa}
                      </div>
                    );
                  })}
                </Paper>
              ) : (
                <h1>Loading</h1>
              )}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable(props) {
  const rows = props.listaFiltrada;

  return (
    <TableContainer component={Paper}>
      {rows ? (
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Nome</TableCell>
              <TableCell align="right">Genero</TableCell>
              <TableCell align="right">Metragem</TableCell>
              <TableCell align="right">Origem</TableCell>
              <TableCell align="right">Direcao</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <Row key={`${row.nome}${i}`} row={row} />
            ))}
          </TableBody>
        </Table>
      ) : null}
    </TableContainer>
  );
}
