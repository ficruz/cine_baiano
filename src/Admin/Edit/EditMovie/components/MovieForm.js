import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";

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

export default function MovieForm(props) {
  const classes = useStyle();

  return (
    <form>
      <Typography>Nome Filme (Obrigatório)</Typography>
      <TextareaAutosize
        className={classes.bodyForm}
        rowsMax={10}
        aria-label="des_nome_filme"
        placeholder="Inserte Titulo (max 250 chars)"
        maxLength={250}
        onChange={props.setInfoHandler("des_nome_filme")}
        defaultValue={props.info.des_nome_filme}
        required
      />

      <Box className={classes.boxSeparator}></Box>

      <Typography>Nome Filme Alternativo</Typography>
      <TextareaAutosize
        className={classes.bodyForm}
        rowsMax={10}
        aria-label="des_nome_filme_alternativo"
        placeholder="Inserte Nome Alternativo (max 250 chars)"
        maxLength={250}
        onChange={props.setInfoHandler("des_nome_filme_alternativo")}
        defaultValue={props.info.des_nome_filme_alternativo}
      />

      <Box className={classes.boxSeparator}></Box>

      <Typography>Data Lançamento</Typography>
      <Datetime
        dateFormat="YYYY-MM-DD"
        timeFormat="HH:mm:ss"
        initialViewMode="years"
        onChange={props.setDateHandler}
        inputProps={{
          placeholder: props.info.dtc_lancamento,
        }}
        disabled={true}
      />

      <Box className={classes.boxSeparator}></Box>

      <Typography>Fontes</Typography>
      <TextareaAutosize
        className={classes.bodyForm}
        rowsMax={10}
        aria-label="fontes"
        placeholder="Inserte Fontes (max 500 chars)"
        maxLength={500}
        onChange={props.setInfoHandler("des_fonte")}
        defaultValue={props.info.des_fonte}
      />

      <Box className={classes.boxSeparator}></Box>

      <Typography>Observaçao</Typography>
      <TextareaAutosize
        className={classes.bodyForm}
        rowsMax={10}
        aria-label="observacao"
        placeholder="Inserte Observaçao"
        onChange={props.setInfoHandler("des_observacao")}
        defaultValue={props.info.des_observacao}
      />

      <Box className={classes.boxSeparator}></Box>

      <Typography>Material Original</Typography>
      <TextareaAutosize
        className={classes.bodyForm}
        rowsMax={10}
        aria-label="material_original"
        placeholder="Inserte Material Original (Max. 250 char.)"
        maxLength={250}
        onChange={props.setInfoHandler("des_material_original")}
        defaultValue={props.info.des_material_original}
      />

      <Box className={classes.boxSeparator}></Box>

      <Typography>Origem</Typography>
      <TextareaAutosize
        className={classes.bodyForm}
        rowsMax={10}
        aria-label="origem"
        placeholder="Inserte Origem (Max. 250 char.)"
        maxLength={250}
        onChange={props.setInfoHandler("des_origem")}
        defaultValue={props.info.des_origem}
      />

      <Box className={classes.boxSeparator}></Box>

      <Typography>Contato</Typography>
      <TextareaAutosize
        className={classes.bodyForm}
        rowsMax={10}
        aria-label="contato"
        placeholder="Inserte Contato (Max. 500 char.)"
        maxLength={500}
        onChange={props.setInfoHandler("des_contato")}
        defaultValue={props.info.des_contato}
      />

      <Box className={classes.boxSeparator}></Box>

      <Typography>Genero Filme (Obrigatório)</Typography>
      <select
        name="cod_genero_filme"
        id="genero"
        onChange={props.setInfoHandler("cod_genero_filme")}
      >
        <option value={null}></option>
        <option selected={props.info.cod_genero_filme === 14} value={14}>
          -
        </option>
        <option selected={props.info.cod_genero_filme === 3} value={3}>
          Não-ficção
        </option>
        <option selected={props.info.cod_genero_filme === 4} value={4}>
          Animação
        </option>
        <option selected={props.info.cod_genero_filme === 5} value={5}>
          Experimental
        </option>
        <option selected={props.info.cod_genero_filme === 6} value={6}>
          Videoarte
        </option>
        <option selected={props.info.cod_genero_filme === 7} value={7}>
          Vídeoclip
        </option>
        <option selected={props.info.cod_genero_filme === 10} value={10}>
          Cine-jornal
        </option>
        <option selected={props.info.cod_genero_filme === 2} value={2}>
          Ficção
        </option>
        <option value={17}>Telefilme</option>
      </select>

      <Box className={classes.boxSeparator}></Box>

      <Typography>Colorido (Obrigatório)</Typography>
      <input
        type="radio"
        id="colorido_yes"
        name="sts_colorido"
        value="S"
        checked={props.info.sts_colorido === "S"}
        onChange={props.setInfoHandler("sts_colorido")}
      ></input>
      <label htmlFor="colorido_yes">Sim</label>

      <input
        type="radio"
        id="colorido_nao"
        name="sts_colorido"
        value="N"
        checked={props.info.sts_colorido === "N"}
        onChange={props.setInfoHandler("sts_colorido")}
      ></input>
      <label htmlFor="colorido_nao">Nao</label>

      <Box className={classes.boxSeparator}></Box>

      <Typography>Preto e Branco (Obrigatório)</Typography>
      <input
        type="radio"
        id="peb_yes"
        name="sts_peb"
        value="S"
        checked={props.info.sts_peb === "S"}
        onChange={props.setInfoHandler("sts_peb")}
      ></input>
      <label htmlFor="peb_yes">Sim</label>

      <input
        type="radio"
        id="peb_nao"
        name="sts_peb"
        value="N"
        checked={props.info.sts_peb === "N"}
        onChange={props.setInfoHandler("sts_peb")}
      ></input>
      <label htmlFor="peb_nao">Nao</label>

      <Box className={classes.boxSeparator}></Box>

      <Typography>Tipo Metragem (Obrigatório)</Typography>
      <select
        name="cod_tipo_metragem"
        id="metragem"
        onChange={props.setInfoHandler("cod_tipo_metragem")}
      >
        <option value={null}></option>
        <option selected={props.info.cod_tipo_metragem === 2} value={2}>
          Curta-metragem
        </option>
        <option selected={props.info.cod_tipo_metragem === 3} value={3}>
          Longa-metragem
        </option>
        <option selected={props.info.cod_tipo_metragem === 5} value={5}>
          Metragem desconhecida
        </option>
      </select>

      <Box className={classes.boxSeparator}></Box>

      <Typography>Mudo (Obrigatório)</Typography>
      <input
        type="radio"
        id="mudo_yes"
        name="sts_mudo"
        value="S"
        checked={props.info.sts_mudo === "S"}
        onChange={props.setInfoHandler("sts_mudo")}
      ></input>
      <label htmlFor="mudo_yes">Sim</label>

      <input
        type="radio"
        id="mudo_nao"
        name="sts_mudo"
        value="N"
        checked={props.info.sts_mudo === "N"}
        onChange={props.setInfoHandler("sts_mudo")}
      ></input>
      <label htmlFor="mudo_nao">Nao</label>

      <Box className={classes.boxSeparator}></Box>

      <Typography>Ano Produção</Typography>
      <TextareaAutosize
        className={classes.bodyForm}
        rowsMax={1}
        aria-label="num_ano_producao"
        name="num_ano_producao"
        placeholder="ex.1920"
        maxLength={4}
        defaultValue={props.info.num_ano_producao}
        onChange={props.setInfoHandler("num_ano_producao")}
      />

      <Box className={classes.boxSeparator}></Box>

      <Typography>Ano Lançamento (Obrigatório)</Typography>
      <TextareaAutosize
        className={classes.bodyForm}
        rowsMax={1}
        aria-label="ano_lancamento"
        placeholder="ex.1920"
        maxLength={4}
        name="num_ano_lancamento"
        onChange={props.setInfoHandler("num_ano_lancamento")}
        defaultValue={props.info.num_ano_lancamento}
        required
      />

      <Box className={classes.boxSeparator}></Box>

      <Typography>Sinopse</Typography>
      <TextareaAutosize
        className={classes.bodyForm}
        rowsMax={10}
        aria-label="sinopse"
        placeholder="Inserte Contato (Max. 2000 char.)"
        maxLength={2000}
        onChange={props.setInfoHandler("des_sinopse")}
        defaultValue={props.info.des_sinopse}
      />

      <Box className={classes.boxSeparator}></Box>

      <Typography>Critica</Typography>
      <TextareaAutosize
        className={classes.bodyForm}
        rowsMax={10}
        aria-label="critica"
        placeholder="Inserte Critica"
        onChange={props.setInfoHandler("des_critica")}
        defaultValue={props.info.des_critica}
      />

      <Box className={classes.boxSeparator}></Box>

      <Typography>Premio</Typography>
      <TextareaAutosize
        className={classes.bodyForm}
        rowsMax={10}
        aria-label="premio"
        placeholder="Inserte Premio (Max. 2000 char.)"
        maxLength={2000}
        onChange={props.setInfoHandler("des_premio")}
        defaultValue={props.info.des_premio}
      />

      <Box className={classes.boxSeparator}></Box>

      <Typography>Copia Disponivel</Typography>
      <TextareaAutosize
        className={classes.bodyForm}
        rowsMax={10}
        aria-label="copia_disponivel"
        placeholder="Inserte Copia disponivel (Max. 500 char.)"
        maxLength={500}
        onChange={props.setInfoHandler("des_copia_disponivel")}
        defaultValue={props.info.des_copia_disponivel}
      />

      <Box className={classes.boxSeparator}></Box>

      <Typography>Link</Typography>
      <TextareaAutosize
        className={classes.bodyForm}
        rowsMax={10}
        aria-label="link"
        placeholder="ex. Site Oficial: http://www.eutimiofilmes.xpg.com.br/"
        maxLength={1000}
        onChange={props.setInfoHandler("des_link")}
        defaultValue={props.info.des_link}
      />

      <Box className={classes.boxSeparator}></Box>

      <Typography>Credito Completo</Typography>
      <TextareaAutosize
        className={classes.bodyForm}
        rowsMax={10}
        aria-label="credito_completo"
        placeholder="Inserte Credito Completo (Max. 3000 char.)"
        maxLength={3000}
        onChange={props.setInfoHandler("des_credito_completo")}
        defaultValue={props.info.des_credito_completo}
      />

      <Box className={classes.boxSeparator}></Box>

      <Typography>Censura</Typography>
      <TextareaAutosize
        className={classes.bodyForm}
        rowsMax={10}
        aria-label="censura"
        placeholder="Inserte Censura (Max. 500 char.)"
        maxLength={500}
        onChange={props.setInfoHandler("des_censura")}
        defaultValue={props.info.des_censura}
      />

      <Box className={classes.boxSeparator}></Box>

      <Typography>Locaçao</Typography>
      <TextareaAutosize
        className={classes.bodyForm}
        rowsMax={10}
        aria-label="locaçao"
        placeholder="Inserte Locaçao (Max. 500 char.)"
        maxLength={500}
        onChange={props.setInfoHandler("des_locacao")}
        defaultValue={props.info.des_locacao}
      />

      <Box className={classes.boxSeparator}></Box>

      <Typography>Etreia</Typography>
      <TextareaAutosize
        className={classes.bodyForm}
        rowsMax={10}
        aria-label="etreia"
        placeholder="Inserte Etria (Max. 500 char.)"
        maxLength={500}
        onChange={props.setInfoHandler("des_etreia")}
        defaultValue={props.info.des_etreia}
      />

      <Box className={classes.boxSeparator}></Box>

      <Typography>Destaque</Typography>
      <input
        type="radio"
        id="des_yes"
        name="destaque"
        value="S"
        onChange={props.setInfoHandler("sts_destaque")}
        checked={props.info.sts_destaque === "S"}
      ></input>
      <label htmlFor="des_yes">Sim</label>

      <input
        type="radio"
        id="des_nao"
        name="destaque"
        value="N"
        onChange={props.setInfoHandler("sts_destaque")}
        checked={props.info.sts_destaque === "N"}
      ></input>
      <label htmlFor="des_nao">Nao</label>
    </form>
  );
}
