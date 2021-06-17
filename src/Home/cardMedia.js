import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.primary.main,
    maxWidth: 345,
    minWidth: 300,
    padding: "5px",
  },
}));

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => history.push(props.link)}>
        <CardMedia
          component="img"
          alt={`${props.photo}`}
          height="140"
          image={`https://filmografiabaiana.s3.sa-east-1.amazonaws.com/${props.photo}`}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.release}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Saiba Mais
        </Button>
      </CardActions>
    </Card>
  );
}
