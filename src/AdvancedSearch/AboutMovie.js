import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";

import { useHistory, useLocation } from "react-router-dom";

import moment from "moment";

import ImageBack from "../assets/default-bg-superhero-2.jpg";
import FrontPic from "../assets/telon_uno.png";

import { useTheme } from "@material-ui/core/styles";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { ContactSupportOutlined } from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Connection } from "../Connection";
import Divider from "@material-ui/core/Divider";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Alert, AlertTitle } from "@material-ui/lab";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import { useOktaAuth } from "@okta/okta-react/";

const useStyles = makeStyles((theme) => ({
  heroBox: {
    ...theme.typography.tab,
    backgroundImage: `url(${ImageBack})`,
    maxWidth: "1920px",
    height: "340px",
    display: "flex",
    alignItems: "center",
  },
  root: {
    ...theme.typography.tab,
    //margin: "0",
    //padding: "0",
  },
  portraitCard: { maxWidth: "150px", maxHeight: "350px" },
  heroDisplay: {
    display: "flex",
    color: "#eaeaea",
    alignItems: "CENTER",
    flexDirection: "row",
  },
  heroTitle: { fontSize: "2.5rem" },
  heroText: { fontSize: "1.3rem" },

  heroTitleMini: { fontSize: "1.8rem" },
  heroTextMini: { fontSize: "1rem" },
  portraitCardMini: { Width: "100%" },

  boxSeparation: { minHeight: "2em" },

  creditsWhite: {
    display: "flex",
    marginTop: "2em",
    marginBottom: "1em",

    flexWrap: "wrap",
    //padding: theme.spacing(3),
  },
  creditsGrey: {
    fontSize: "1.2rem",
    fontWeight: 300,
    //padding: theme.spacing(3),
  },
  imagesSection: {
    backgroundColor: theme.palette.common.lightgrey,
  },
  imageStrip: { display: "flex" },
  darkStrip: { backgroundColor: "#1f262e" },

  sinopse: { color: theme.palette.common.black },
  // info: { display: "flex" },
  celldiv: {
    minWidth: 450,
    //marginLeft: theme.spacing(8),
    marginBottom: theme.spacing(2),
    fontSize: "1.2rem",
    fontWeight: 300,
  },
  celldivMini: {
    minWidth: 250,
    //marginLeft: theme.spacing(8),
    marginBottom: theme.spacing(2),
    fontSize: "1.2rem",
    fontWeight: 300,
  },
  celldivTitle: {
    fontWeight: 400,
  },
  adminButtons: {
    display: "flex",
    justifyContent: "center",
  },
  adminButtonsIcon: { margin: theme.spacing(1) },
  adminButtonsIconAdd: { backgroundColor: "green", margin: theme.spacing(1) },
}));

//console.log(Connection.api);
const ApiConnection = `${Connection.api}/api/aboutfilme`;

const ManagingButtons = (props) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box className={classes.adminButtons}>
      <Fab
        color="primary"
        className={classes.adminButtonsIconAdd}
        aria-label="add"
        onClick={() =>
          history.push({
            pathname: `/New/Movie/`,
          })
        }
      >
        <AddIcon />
      </Fab>

      <Fab
        color={"secondary"}
        className={classes.adminButtonsIcon}
        aria-label="edit"
        onClick={() =>
          history.push({
            pathname: `/Edit/Movie/`,
            state: props.movieData,
          })
        }
      >
        <EditIcon />
      </Fab>

      <Fab
        color="primary"
        className={classes.adminButtonsIcon}
        aria-label="delete"
        onClick={(e) => {
          if (!window.confirm("Tem certeza de que deseja DELETAR a entrada?")) {
            e.preventDefault();
          } else {
            console.log("delete");
          }
        }}
      >
        <DeleteForeverIcon />
      </Fab>
    </Box>
  );
};

export default function Aboutfilme(props) {
  const { authState, oktaAuth } = useOktaAuth();
  const [movieData, setMovieData] = useState(null);

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  const search = props.location.search;
  const params = new URLSearchParams(search);
  const movieCode = params.get("movieCode");

  let images = [];

  let tempMovieData = {};

  const movieDataReducer = (acc, cur) => {
    if (acc["credits"][cur["des_subcategoria"]]) {
      acc["credits"][cur["des_subcategoria"]] = `${
        acc["credits"][cur["des_subcategoria"]]
      }, ${cur["des_pessoa"]}`;
    } else {
      Object.keys(cur).forEach((el) => {
        acc[`${el}`] = cur[`${el}`];
      });
      acc["credits"][cur["des_subcategoria"]] = cur["des_pessoa"];
    }

    return acc;
  };

  useEffect(() => {
    axios
      .get(`${ApiConnection}?cod_filme=${movieCode}`)
      .then((res) => {
        //  console.log(res.data);
        tempMovieData = res.data.reduce(movieDataReducer, { credits: {} });

        // tempMovieData.des_link = tempMovieData.des_link.split("\r\n");
        console.log(tempMovieData);

        return tempMovieData;
      })
      .then((res) => {
        tempMovieData.Elenco_string = res.Elenco;
        tempMovieData.Elenco = res.Elenco.split("\r\n");

        tempMovieData.des_link_string = res.des_link;
        tempMovieData.des_link = res.des_link.split("\r\n");

        tempMovieData.des_contato_string = res.des_contato;
        tempMovieData.des_contato = res.des_contato.split("\r\n");

        tempMovieData.des_critica_string = res.des_critica;
        tempMovieData.des_critica = res.des_critica.split("\r\n");

        tempMovieData.movieCode = parseInt(movieCode);

        tempMovieData.dtc_lancamento = moment(
          tempMovieData.dtc_lancamento,
          "YYYY-MM-DDTHH:mm:ssZ"
        ).format("YYYY-MM-DD HH:mm:ss");

        // console.log(
        //   moment(tempMovieData.dtc_lancamento, "YYYY-MM-DDTHH:mm:ssZ").format(
        //     "YYYY-MM-DD HH:mm:ss"
        //   )
        //);

        return setMovieData(tempMovieData);
      })
      .catch((err) => console.log(err));
  }, []);

  const fullSize = (
    <React.Fragment>
      <div className={classes.heroBox}>
        <Container>
          <Box mb={8} className={classes.heroDisplay}>
            {" "}
            <Card className={classes.portraitCard}>
              <CardActionArea>
                {movieData ? (
                  movieData.Portrait ? (
                    <Box p={0.3}>
                      <CardMedia
                        component="img"
                        alt="Movie Poster"
                        //height="140"
                        image={`https://filmografiabaiana.s3-sa-east-1.amazonaws.com/${movieData.Portrait.nom_foto_p}`}
                        title="Movie Title"
                        // disableRipple="true"
                      />
                    </Box>
                  ) : (
                    <Box p={0.3}>
                      <CardMedia
                        component="img"
                        alt="Movie Poster"
                        //height="140"
                        image={FrontPic}
                        title="Movie Title"
                      />
                    </Box>
                  )
                ) : null}
              </CardActionArea>
            </Card>
            {movieData ? (
              <React.Fragment>
                <Box ml={1}>
                  <Box>
                    <Typography
                      className={classes.heroTitle}
                      variant="h6"
                      gutterBottom={false}
                    >
                      {movieData.Nome} ({movieData.Ano_Lancamento})
                    </Typography>
                  </Box>
                  <Typography className={classes.heroText} variant="body1">
                    {" "}
                    {movieData.Metragem} /{" "}
                    {movieData.sts_mudo === "S" ? "Mudo" : "Sonoro"} /{" "}
                    {movieData.Genero}
                  </Typography>
                  <Typography className={classes.heroText} variant="body1">
                    {" "}
                    Material original: {movieData.Suporte} /{" "}
                    {movieData.Colorido === "S" ? " Cor /" : " Sem Cor /"}
                    {movieData.sts_peb === "S"
                      ? " Preto e Branco /"
                      : null}{" "}
                    {movieData.Material_Original}
                  </Typography>
                </Box>
              </React.Fragment>
            ) : null}{" "}
          </Box>
        </Container>
      </div>

      <Container maxWidth="md">
        {movieData ? (
          <React.Fragment>
            <Box className={classes.creditsWhite}>
              {movieData.credits.Direção ? (
                <Box className={classes.celldiv} variant="body1">
                  <Box className={classes.celldivTitle}>Direção:</Box>
                  <Divider />
                  {movieData.credits.Direção}
                </Box>
              ) : null}

              {movieData.Origem ? (
                <Box className={classes.celldiv} variant="body1">
                  <Box className={classes.celldivTitle}>Origem:</Box>
                  <Divider />
                  {movieData.Origem}
                </Box>
              ) : null}
              {movieData.Ano_Producao ? (
                <Box className={classes.celldiv} variant="body1">
                  <Box className={classes.celldivTitle}>Ano Produção:</Box>
                  <Divider />
                  {movieData.Ano_Producao}
                </Box>
              ) : null}
              {movieData.Locacao ? (
                <Box className={classes.celldiv} variant="body1">
                  <Box className={classes.celldivTitle}>Locações:</Box>
                  <Divider />
                  {movieData.Locacao}
                </Box>
              ) : null}
            </Box>
          </React.Fragment>
        ) : (
          <h1>Loading</h1>
        )}
      </Container>

      {movieData ? (
        <Box className={classes.imagesSection}>
          <Box className={classes.boxSeparation} />
          <Container maxWidth="md">
            <Box className={classes.creditsWhite}>
              {Object.keys(movieData.credits).map((el, index) => {
                return !(el === "Direção") ? (
                  <Box key={el} className={classes.celldiv}>
                    <Box className={classes.celldivTitle}>{`${el}`}:</Box>

                    <Divider />
                    {movieData.credits[`${el}`]}
                  </Box>
                ) : null;
              })}

              {movieData.Elenco.length > 1 ? (
                <Box className={classes.celldiv}>
                  <Box className={classes.celldivTitle}>Elenco:</Box>

                  <Divider />
                  {movieData.Elenco.toString()}
                </Box>
              ) : null}
            </Box>
          </Container>
          <Box className={classes.boxSeparation} />
        </Box>
      ) : null}

      {movieData ? (
        movieData.des_sinopse ? (
          <Container maxWidth="md">
            <Box className={classes.boxSeparation} />
            <Box className={classes.creditsWhite}>
              <Box className={classes.celldiv}>
                <Box className={classes.celldivTitle}>Sinopse</Box>
                <Divider />
                {movieData.des_sinopse}
              </Box>
            </Box>
          </Container>
        ) : null
      ) : null}

      {movieData ? (
        movieData.des_premio ? (
          <Container maxWidth="md">
            <Box className={classes.boxSeparation} />
            <Box className={classes.creditsWhite}>
              <Box className={classes.celldiv}>
                <Box className={classes.celldivTitle}>Prêmios</Box>
                <Divider />
                {movieData.des_premio}
              </Box>
            </Box>
          </Container>
        ) : null
      ) : null}

      {movieData ? (
        movieData.des_observacao ? (
          <Container maxWidth="md">
            <Box className={classes.boxSeparation} />
            <Box className={classes.creditsWhite}>
              <Box className={classes.celldiv}>
                <Box className={classes.celldivTitle}>Observações</Box>
                <Divider />
                {movieData.des_observacao}
              </Box>
            </Box>
          </Container>
        ) : null
      ) : null}

      {movieData ? (
        movieData.des_fonte ? (
          <Container maxWidth="md">
            <Box className={classes.boxSeparation} />
            <Box className={classes.creditsWhite}>
              <Box className={classes.celldiv}>
                <Box className={classes.celldivTitle}>Fontes</Box>
                <Divider />
                {movieData.des_fonte}
              </Box>
            </Box>
          </Container>
        ) : null
      ) : null}

      {movieData ? (
        movieData.des_critica.length > 1 ? (
          <Container maxWidth="md">
            <Box className={classes.boxSeparation} />

            <Box className={classes.creditsWhite}>
              <Box className={classes.celldiv}>
                <Box className={classes.celldivTitle}>Imprensa</Box>
                <Divider />
                {movieData.des_critica.map((el, index) => {
                  return (
                    <Typography
                      key={`${el}-${index}`}
                      className={classes.celldiv}
                    >
                      {el}
                    </Typography>
                  );
                })}
              </Box>
            </Box>
          </Container>
        ) : null
      ) : null}

      <Box className={classes.imagesSection}>
        <Box className={classes.boxSeparation} />
        <Container maxWidth="md">
          {" "}
          {movieData ? (
            <Box className={classes.creditsWhite}>
              {movieData.des_link ? (
                <Box>
                  {/* <Typography variant="h6">Links</Typography> */}

                  {movieData.des_link.map((el) => {
                    if (el.length > 1) {
                      return (
                        <Box key={el} className={classes.celldiv}>
                          <Box className={classes.celldivTitle}>
                            {el.match(/[^:]*/)}:
                          </Box>

                          <Divider />
                          <a href={el.match(/http(=?).*/)}>
                            {el.match(/http(=?).*/)}
                          </a>
                        </Box>
                      );
                    } else {
                      return null;
                    }
                  })}
                </Box>
              ) : null}
            </Box>
          ) : null}
        </Container>
        <Box className={classes.boxSeparation} />
      </Box>

      {movieData ? (
        <Box className={classes.imagesSection}>
          <Container>
            <Grid
              className={classes.imageGrid}
              container
              justify={"center"}
              spacing={1}
            >
              {movieData.photo.map((el, index) => {
                images[
                  index
                ] = `https://filmografiabaiana.s3-sa-east-1.amazonaws.com/${el.nom_foto}`;

                return (
                  <Grid key={el.nom_foto_p} item xs={12} sm={6} lg={3}>
                    {" "}
                    <Card>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt={`${el.nom_foto_p}`}
                          height="315"
                          image={
                            `https://filmografiabaiana.s3-sa-east-1.amazonaws.com/${el.nom_foto_p}` ||
                            `https://filmografiabaiana.s3-sa-east-1.amazonaws.com/${el.nom_foto}`
                          }
                          onClick={() => {
                            console.log(images);
                            setPhotoIndex(index);
                            return setIsOpen(true);
                          }}
                          title={`${el.nom_foto_p}`}
                        />
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
            <Box className={classes.boxSeparation} />
            {authState.isAuthenticated ? (
              <ManagingButtons movieData={movieData} />
            ) : null}

            <Box className={classes.boxSeparation} />
          </Container>
        </Box>
      ) : null}

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </React.Fragment>
  );

  const smallSize = (
    <React.Fragment>
      <div className={classes.heroBox}>
        <Container>
          <Box mb={8} className={classes.heroDisplay}>
            {" "}
            {movieData ? (
              <React.Fragment>
                <Box ml={1} mt={10}>
                  <Box>
                    <Typography
                      className={classes.heroTitleMini}
                      variant="h6"
                      gutterBottom={false}
                    >
                      {movieData.Nome} ({movieData.Ano_Lancamento})
                    </Typography>
                  </Box>
                  <Box className={classes.boxSeparation} />
                  <Typography className={classes.heroTextMini} variant="body1">
                    {" "}
                    {movieData.Metragem} /{" "}
                    {movieData.sts_mudo === "S" ? "Mudo" : "Sonoro"} /{" "}
                    {movieData.Genero}
                  </Typography>
                  <Typography className={classes.heroTextMini} variant="body1">
                    {" "}
                    Material original: {movieData.Suporte} /{" "}
                    {movieData.Colorido === "S" ? " Cor /" : " Sem Cor /"}
                    {movieData.sts_peb === "S"
                      ? " Preto e Branco /"
                      : null}{" "}
                    {movieData.Material_Original}
                  </Typography>
                </Box>
              </React.Fragment>
            ) : null}{" "}
          </Box>
        </Container>
      </div>

      <Card className={classes.portraitCardMini}>
        <CardActionArea>
          {movieData ? (
            movieData.Portrait ? (
              <Box>
                <CardMedia
                  component="img"
                  alt="Movie Poster"
                  //height="140"
                  image={`https://filmografiabaiana.s3-sa-east-1.amazonaws.com/${movieData.Portrait.nom_foto_p}`}
                  title="Movie Title"
                  disableRipple="true"
                />
              </Box>
            ) : (
              <Box p={0.3}>
                <CardMedia
                  component="img"
                  alt="Movie Poster"
                  //height="140"
                  image={FrontPic}
                  title="Movie Title"
                />
              </Box>
            )
          ) : null}
        </CardActionArea>
      </Card>

      <Container maxWidth="md">
        {movieData ? (
          <React.Fragment>
            <Box className={classes.creditsWhite}>
              {movieData.credits.Direção ? (
                <Typography className={classes.celldivMini} variant="body1">
                  <Box className={classes.celldivTitle}>Direção:</Box>
                  <Divider />
                  {movieData.credits.Direção}
                </Typography>
              ) : null}

              {movieData.Origem ? (
                <Typography className={classes.celldivMini} variant="body1">
                  <Box className={classes.celldivTitle}>Origem:</Box>
                  <Divider />
                  {movieData.Origem}
                </Typography>
              ) : null}
              {movieData.Ano_Producao ? (
                <Typography className={classes.celldivMini} variant="body1">
                  <Box className={classes.celldivTitle}>Ano Produção:</Box>
                  <Divider />
                  {movieData.Ano_Producao}
                </Typography>
              ) : null}
              {movieData.Locacao ? (
                <Typography className={classes.celldivMini} variant="body1">
                  <Box className={classes.celldivTitle}>Locações:</Box>
                  <Divider />
                  {movieData.Locacao}
                </Typography>
              ) : null}
            </Box>
          </React.Fragment>
        ) : (
          <h1>Loading</h1>
        )}
      </Container>

      {movieData ? (
        <Box className={classes.imagesSection}>
          <Box className={classes.boxSeparation} />
          <Container maxWidth="md">
            <Box className={classes.creditsWhite}>
              {Object.keys(movieData.credits).map((el, index) => {
                return !(el === "Direção") ? (
                  <Box key={`${el}-2`} className={classes.celldivMini}>
                    <Box className={classes.celldivTitle}>{`${el}`}:</Box>

                    <Divider />
                    {movieData.credits[`${el}`]}
                  </Box>
                ) : null;
              })}

              {movieData.Elenco ? (
                <Typography className={classes.celldivMini}>
                  <Box className={classes.celldivTitle}>Elenco:</Box>

                  <Divider />
                  {movieData.Elenco.toString()}
                </Typography>
              ) : null}
            </Box>
          </Container>
          <Box className={classes.boxSeparation} />
        </Box>
      ) : null}

      {movieData ? (
        movieData.des_sinopse ? (
          <Container maxWidth="md">
            <Box className={classes.boxSeparation} />
            <Box className={classes.creditsWhite}>
              <Typography className={classes.celldivMini}>
                <Box className={classes.celldivTitle}>Sinopse</Box>
                <Divider />
                {movieData.des_sinopse}
              </Typography>
            </Box>
          </Container>
        ) : null
      ) : null}

      {movieData ? (
        movieData.des_premio ? (
          <Container maxWidth="md">
            <Box className={classes.boxSeparation} />
            <Box className={classes.creditsWhite}>
              <Typography className={classes.celldivMini}>
                <Box className={classes.celldivTitle}>Prêmios</Box>
                <Divider />
                {movieData.des_premio}
              </Typography>
            </Box>
          </Container>
        ) : null
      ) : null}

      {movieData ? (
        movieData.des_observacao ? (
          <Container maxWidth="md">
            <Box className={classes.boxSeparation} />
            <Box className={classes.creditsWhite}>
              <Typography className={classes.celldivMini}>
                <Box className={classes.celldivTitle}>Observações</Box>
                <Divider />
                {movieData.des_observacao}
              </Typography>
            </Box>
          </Container>
        ) : null
      ) : null}

      {movieData ? (
        movieData.des_fonte ? (
          <Container maxWidth="md">
            <Box className={classes.boxSeparation} />
            <Box className={classes.creditsWhite}>
              <Typography className={classes.celldivMini}>
                <Box className={classes.celldivTitle}>Fontes</Box>
                <Divider />
                {movieData.des_fonte}
              </Typography>
            </Box>
          </Container>
        ) : null
      ) : null}

      {movieData ? (
        movieData.des_critica ? (
          <Container maxWidth="md">
            <Box className={classes.boxSeparation} />

            <Box className={classes.creditsWhite}>
              <Typography className={classes.celldivMini}>
                <Box className={classes.celldivTitle}>Imprensa</Box>
                <Divider />
                {movieData.des_critica.map((el, index) => {
                  return (
                    <Typography
                      key={`${el}${index}`}
                      className={classes.celldivMini}
                    >
                      {el}
                    </Typography>
                  );
                })}
              </Typography>
            </Box>
          </Container>
        ) : null
      ) : null}

      <Box className={classes.imagesSection}>
        <Box className={classes.boxSeparation} />
        <Container maxWidth="md">
          {" "}
          {movieData ? (
            <Box className={classes.creditsWhite}>
              {movieData.des_link ? (
                <Box>
                  <Typography className={classes.celldivMini}>
                    <Box className={classes.celldivTitle}>Links:</Box>
                  </Typography>

                  {movieData.des_link.map((el, index) => {
                    if (el.length > 1) {
                      return (
                        <Typography
                          key={`${el}${index}`}
                          className={classes.celldivMini}
                        >
                          <a href={el.match(/http(=?).*/)}>
                            {el.match(/[^:]*/)}
                          </a>
                        </Typography>
                      );
                    } else {
                      return null;
                    }
                  })}
                </Box>
              ) : null}
            </Box>
          ) : null}
        </Container>
        <Box className={classes.boxSeparation} />
      </Box>

      {movieData ? (
        <Box className={classes.imagesSection}>
          <Container>
            <Grid
              className={classes.imageGrid}
              container
              justify={"center"}
              spacing={1}
            >
              {movieData.photo.map((el, index) => {
                images[
                  index
                ] = `https://filmografiabaiana.s3-sa-east-1.amazonaws.com/${el.nom_foto}`;

                return (
                  <Grid
                    key={`${el.nom_foto}${index}`}
                    item
                    xs={12}
                    sm={6}
                    lg={3}
                  >
                    {" "}
                    <Card>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt={`${el.nom_foto_p}`}
                          height="315"
                          image={
                            `https://filmografiabaiana.s3-sa-east-1.amazonaws.com/${el.nom_foto_p}` ||
                            `https://filmografiabaiana.s3-sa-east-1.amazonaws.com/${el.nom_foto}`
                          }
                          onClick={() => {
                            console.log(images);
                            setPhotoIndex(index);
                            return setIsOpen(true);
                          }}
                          title={`${el.nom_foto_p}`}
                        />
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
            <Box className={classes.boxSeparation} />
          </Container>
        </Box>
      ) : null}
    </React.Fragment>
  );

  return <div className={classes.root}>{matches ? smallSize : fullSize}</div>;
}
