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
    margin: "0",
    padding: "0",
    marginTop: "2em",
  },

  divider: {
    backgroundColor: theme.palette.secondary.main,
    width: "40px",
    height: "4px",
  },
  drawerTypo: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.6,
    "&:hover": { opacity: 1 },
    textTransform: "uppercase",
  },
}));

export default function Aboutus() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container>
        <div className={classes.root}>
          <Typography variant="h3" gutterBottom>
            Nossas Bases
          </Typography>
          <div className={classes.divider}></div>
          <br />
          <Typography variant="h6" gutterBottom>
            International Federation of Film Archives (FIAF) e Filmografia
            Brasileira
          </Typography>
          <Typography variant="body1" gutterBottom>
            Em 1980, a UNESCO lançou a “Recomendação sobre a Salvaguarda e
            Conservação das Imagens em Movimento”. Uma das ações sugeridas é
            “estabelecer e divulgar filmografias nacionais e catálogos de todas
            as categorias de imagens em movimento [...] procurando, quando
            possível, padronizar os sistemas de catalogação”. De acordo com a
            “Recomendação”, este inventário constituiria a base para ações de
            preservação dos acervos audiovisuais.
            <br />
            <br />
            Tendo em mente a indicação da UNESCO, Filmografia Baiana: Memória
            Viva utiliza um sistema de catalogação criado a partir das normas
            definidas pela FIAF - Federação Internacional de Arquivos
            Filmográficos e desenvolvido em constante diálogo com a Cinemateca
            Brasileira.
            <br />
            <br />
            A Cinemateca é a instituição responsável por documentar a
            Filmografia Brasileira, porém, mesmo com a enorme competência e
            comprometimento dos seus profissionais, não tem possibilidade de se
            aprofundar em questões eminentemente “estaduais/regionais”, devido à
            vastidão do conjunto da produção brasileira. É justamente aí que
            entra o projeto Filmografia Baiana, acrescentando um pequeno mosaico
            à pesquisa do audiovisual nacional.
            <br />
            <br />
            Isso significa que, mesmo estabelecendo pontes e diálogos nacionais,
            caminhamos ao encontro de algumas reflexões de Jean-Claude
            Bernardet, em “Historiografia Clássica do Cinema Brasileiro”. O
            autor nos chama a atenção para a necessidade de observar e respeitar
            o que ele chama de “ritmos próprios” das produções regionais, que
            não podem ser subsumidas a uma grande narrativa nacional, na qual
            perdem sua especificidade e são submetidas aos grandes eixos de
            produção/reflexão. Ou seja, ao dar visibilidade às produções
            baianas, tidas como “periféricas”, contribuímos para o
            enriquecimento do panorama audiovisual brasileiro.
            <br />
            <br />
          </Typography>
          <br />
          <br />
          <br />
          <br />
          <Typography variant="h3" gutterBottom>
            Objetivos
          </Typography>
          <div className={classes.divider}></div>
          <br />
          <Typography component="span" variant="body1" gutterBottom>
            Nossos três principais objetivos estão intimamente interligados. São
            eles:
            <br />
            <br />
            <List aria-label="objetivos">
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize="small" color={"secondary"} />
                </ListItemIcon>
                <ListItemText primary="Incentivar as pesquisas sobre a história do cinema e vídeo realizados na Bahia" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize="small" color={"secondary"} />
                </ListItemIcon>
                <ListItemText primary="Divulgar (e valorizar) a produção audiovisual baiana" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize="small" color={"secondary"} />
                </ListItemIcon>
                <ListItemText primary="Preparar o fundamento para definição de uma política de preservação do acervo audiovisual do estado." />
              </ListItem>
            </List>
            <br />
            <br />
            Ao denominar a segunda etapa do projeto de "Memória Viva", quisemos
            enfatizar a importância de se constituírem "lugares de memória" para
            o cinema baiano, entendendo a memória como dinâmica, reinventada no
            contato constante com o presente e o cotidiano. Ou seja, é preciso
            que haja meios de registro e catalogação das produções baianas, para
            que sua história possa ser contada e sua permanência na memória
            coletiva impeça o esquecimento, que compromete inclusive a
            existência dos próprios filmes.
            <br />
            <br />
            As informações catalogadas na Filmografia Baiana podem ser usadas
            como base tanto para pesquisas posteriores, como também para
            alimentar o banco de dados da Cinemateca Brasileira, melhorando,
            assim, a representação baiana na história do cinema do Brasil. São
            parte importante do projeto o treinamento de estudantes para a
            documentação filmográfica de acordo com as normas e padrões
            internacionais e um levantamento de fontes sobre o audiovisual
            baiano (também disponível aqui). Todas as fontes utilizadas estão
            devidamente creditadas nas páginas dos filmes.
            <br />
            <br />
            Além de servir como base para pesquisas e preservação, o site do
            projeto é também um meio eficiente para a difusão do audiovisual
            baiano. A utilização de um banco de dados (que pode ser
            permanentemente atualizado e absorver tanto os resultados de
            pesquisas posteriores como também as futuras produções de cinema e
            vídeo) e da Internet (pela sua crescente acessibilidade) devem ser
            vistos neste contexto. Através do sistema de buscas do site, as
            informações sobre a produção audiovisual da Bahia estarão facilmente
            disponíveis para os interessados.
            <br />
            <br />
          </Typography>
          <br />
          <br />
          <br />
          <br />
          <Typography variant="h3" gutterBottom>
            Equipe
          </Typography>
          <div className={classes.divider}></div>
          <br />
          <Typography component="span" variant="body1" gutterBottom>
            <b>Concepção e coordenação:</b> Laura Bezerra
            <br />
            <b>Pesquisadoras: :</b>
            <br />
            <List aria-label="Pesquisadoras">
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize="small" color={"secondary"} />
                </ListItemIcon>
                <ListItemText primary="Laura Bezerra, prof. do Centro de Cultura, Linguagens e Tecnologias Aplicadas - CECULT/UFRB." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize="small" color={"secondary"} />
                </ListItemIcon>
                <ListItemText primary="Izabel Melo,  prof. da Universidade do Estado da Bahia - UNEB." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize="small" color={"secondary"} />
                </ListItemIcon>
                <ListItemText primary="Gabriel Pires, NordesteLab (pesquisador associado)." />
              </ListItem>
            </List>
            <br />
            <br />
            <b>Pesquisadoras: :</b>
            <br />
            <List aria-label="estudantes">
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize="small" color={"secondary"} />
                </ListItemIcon>
                <ListItemText primary="Joanderson Santos (BICULT/UFRB, Santo Amaro)." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize="small" color={"secondary"} />
                </ListItemIcon>
                <ListItemText primary="heila Araújo (BICULT/UFRB, Santo Amaro)." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize="small" color={"secondary"} />
                </ListItemIcon>
                <ListItemText primary="Iago Ribeiro (Cinema e Audiovisual/UFRB, Cachoeira)." />
              </ListItem>
            </List>
            <br />
            <br />
            <b>Banco de dados:</b> João Paulo Coelho
            <br />
            <br />
            <b>Projeto gráfico:</b> Fernanda Andrade
            <br />
            <br />
            <b>Assessorai de Comunicação:</b> Priscila Mendes e Shagaly Ferreira
            <br />
            <br />
          </Typography>
          <br />
          <br />
        </div>
      </Container>
    </React.Fragment>
  );
}
