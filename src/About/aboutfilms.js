import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "700px",
    ...theme.typography.tab,

    padding: "2em",
  },

  drawerTypo: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.6,
    "&:hover": { opacity: 1 },
    textTransform: "uppercase",
  },
  divider: {
    backgroundColor: theme.palette.secondary.main,
    width: "40px",
    height: "4px",
  },
}));

export default function Oqueefilme() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container>
        <div className={classes.root}>
          <Typography variant="h3" gutterBottom>
            O que é um filme baiano?
          </Typography>
          <div className={classes.divider}></div>
          <br />

          <Typography component="span" variant="body1" gutterBottom>
            Os critérios para inclusão de produções audiovisuais no projeto
            Filmografia Baiana são:
            <br />
            <br />
            <List aria-label="objetivos">
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize="small" color={"secondary"} />
                </ListItemIcon>
                <ListItemText primary="Ter sido realizado por companhias produtoras (ou produtores) radicadas na Bahia" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize="small" color={"secondary"} />
                </ListItemIcon>
                <ListItemText primary="Ter sido realizado por companhias produtoras (ou produtores) radicadas na Bahia" />
              </ListItem>
            </List>
            <br />
            <br />
            Serão documentados produtos audiovisuais, independente do:
            <br />
            <br />
            <List aria-label="objetivos">
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize="small" color={"secondary"} />
                </ListItemIcon>
                <ListItemText primary="suporte (35mm, 16mm, Super-8, vídeo, formatos digitais etc.)" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize="small" color={"secondary"} />
                </ListItemIcon>
                <ListItemText primary="gênero (ficção, não-ficção, experimental, animação, cine-jornal etc.)" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize="small" color={"secondary"} />
                </ListItemIcon>
                <ListItemText primary="duração (curtas e longas-metragens)" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize="small" color={"secondary"} />
                </ListItemIcon>
                <ListItemText primary="valor artístico e/ou comercial. " />
              </ListItem>
            </List>
            <br />
            <br />
            <b>Não estão incluídos:</b> filmes institucionais, trabalhos de
            publicidade e telejornalismo, bem como a produção audiovisual
            doméstica. Consideramos que videoarte, videoclipes ou os chamados
            “TV movie” fazem parte da Filmografia Baiana, mas não realizamos uma
            pesquisa específica para localizá-los e catalogá-los. Uma etapa
            posterior do projeto dará conta dessas produções.
            <br />
            <br />
            <b>Quem define o que é um filme baiano?</b>
            <br />
            <br />
            Somos muitas vezes questionados sobre o que seria um filme “baiano”.
            Filmes de diretores baianos? Filmes rodados na Bahia? Filmes de
            “temática baiana”? Este seria um campo vasto de discussão, se
            pensamos em questões identitárias. Mas o foco do nosso trabalho é a
            documentação filmográfica – análoga à documentação bibliográfica –
            e, neste contexto, a padronização de critérios de catalogação é
            fundamental.
            <br />
            <br />
            No seu “Glossário de termos filmográficos”, a FIAF – Federação
            Internacional de Arquivos Filmográficos determina os identificadores
            básicos de um filme e entre eles encontramos o “País de origem,
            nacionalidade de origem”, definido como: “País no qual está
            domiciliada a empresa ou pessoa que produz um filme. No caso de uma
            co-produção internacional, devem ser enumerados todos os países
            participantes.” É esta definição, utilizada na Filmografia
            Brasileira, que adotamos no projeto Filmografia Baiana.
            <br />
            <br />
            Em casos onde não existam definições aceitas por todos, procuramos
            seguir a Cinemateca Brasileira. Por exemplo, assim como na
            Filmografia Brasileira, só classificamos os filmes como curtas (até
            59’) ou longas (a partir de 60’).
          </Typography>
        </div>
      </Container>
    </React.Fragment>
  );
}
