import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import HotelIcon from '@material-ui/icons/Hotel';
import BathtubIcon from '@material-ui/icons/Bathtub';
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin:'30px'
  },
  media: {
    height: 140,
  },
  icons:{
    marginTop:'10px',
    display: 'flex',
  justifyContent: 'space-between',
  }
});

export default function MediaCard(props) {
  const state = props.state;
  const adress = props.adress;
  const price = props.price;
  const baths = props.baths;
  const rooms = props.rooms;
  const area = props.area;
  const slug = props.slug;
  const id = props.id;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea href={`/propiedades/${slug}/${id}`}>
        <CardMedia
          className={classes.media}
          image="/hero.jpeg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {state}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {adress}
          </Typography>
          <Typography variant="h5" color="primary">
            ${price}
          </Typography>
          <Divider />
          <Typography variant="h6" color="primary" className={classes.icons}>
            <Box><HotelIcon/> {rooms}</Box>
            <Box><BathtubIcon/>{baths}</Box>
            <Box><SquareFootIcon/>{area}</Box>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
