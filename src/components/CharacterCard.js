
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import React from 'react' 

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: "20px"
  },
  media: {
    height: 200
  },
  button: {
    padding: 0,
    margin: 0
  }
});

export default function CharacterCard({ character }) {
  const classes = useStyles();
  return (
    <Card className={`${classes.card} CardContainer`}>
      <CardActionArea
        onClick={() =>
          alert("characters")
        }
      >
        <CardMedia
          className={classes.media}
          image={`${character.image}`}
          title={`${character.name}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {character.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Species: {character.species}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Gender: {character.gender}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

