import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import { MakeStyles } from "reactstrap";
import { Card } from 'cards';

import { CardActionArea } from "./component/CardActionArea";
import { CardMedia } from "cardmedia";
import { CardContent } from "cardcontent"; 
import React from 'react' 

const useStyles = MakeStyles({
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
          alert("This would give you a full snapshot of the characters.")
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