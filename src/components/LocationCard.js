import React from "react";
// Material UI Imports
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
import { light } from "@material-ui/core/styles/createPalette";

//Stying 
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: "20px"
  },
  media: {
    height: 140
  },
  button: {
    padding: 0,
    margin: 0
  }
});

export default function LocationCard({ location }) {
  const classes = useStyles();
  return (
    <Card className={`${classes.card} CardContainer`}>
      <CardActionArea
        onClick={() =>
          alert("This would give you a full snapshot of the Location.")
        }
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {location.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Dimension: {location.dimension}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Residents: {location.residents.length}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}