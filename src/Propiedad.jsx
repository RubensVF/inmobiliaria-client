import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Carousel from "react-multi-carousel";
import {
  Divider,
  makeStyles,
  Typography,
  Box,
  useTheme,
} from "@material-ui/core";
import BathtubIcon from "@material-ui/icons/Bathtub";
import HotelIcon from "@material-ui/icons/Hotel";
import SquareFootIcon from "@material-ui/icons/SquareFoot";
import { useMediaQuery } from "@material-ui/core";
import { getById } from "./service";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
 
};
const useStyle = makeStyles((theme) => ({
  img: {
    marginTop: "30px",
    height: "300px",
  },
  box: {display:'inline', 
    margin: "20px" ,
        width:'45%'},
  icons:{
    margin:'10px 2px'

  },
}));

function Propiedad() {
  const classes = useStyle();
  const [data, setData] = useState(null);
  const { id } = useParams();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const fetchApi = async () => {
    const response = await getById(id);
    console.log(response);
    setData(response);
  };
  useEffect(() => {
    fetchApi();
  });
  return (
    <div>
      {data === null ? (
        "cargando"
      ) : (
        <>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <img src="/hero.jpeg" alt="xdfdsaf" className={classes.img}></img>
            <img src="/hero.jpeg" alt="xdfdsaf" className={classes.img}></img>
            <img src="/hero.jpeg" alt="xdfdsaf" className={classes.img}></img>
          </Carousel>
          <Container maxWidth="sm">
            <Typography variant="h4" color="initial">
              {data.slug}
            </Typography>
            <Typography variant="h4" color="primary">
              ${data.price}
            </Typography>

            <Divider></Divider>
            <Typography variant="h5" color="initial">
              Detalles generales
            </Typography>
            <div className={classes.icons}>
              <Box className={classes.box}>
                <HotelIcon />
                <label>Recamara(s): </label>
                {data.rooms}
              </Box>
              <Box className={classes.box}>
                <BathtubIcon />
                <label>Baño(s): </label>
                {data.baths}
              </Box>
              <Box className={classes.box}>
                <BathtubIcon />
                <label>Medios baño(s): </label>
                {data.baths}
              </Box>
              <Box className={classes.box}>
                <SquareFootIcon />
                <label>Area: </label>
                {data.area} m<sup>2</sup>
              </Box>
            </div>
            <Divider />
            <Typography variant="h5" color="initial">
              Ubicacion
              <Typography variant="subtitle1" color="initial">
                {data.adress}
              </Typography>
            </Typography>
            {isSmall ? (
              <iframe
                title="1"
                src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d3762.1609405905306!2d-99.1657407!3d19.4486267!3m2!1i1024!2i768!4f13.1!2m1!1szocalo!5e0!3m2!1ses-419!2smx!4v1626837411354!5m2!1ses-419!2smx"
                width="320"
                height="300"
                allowfullscreen=""
                loading="lazy"
                style={{ border: "0" }}
              ></iframe>
            ) : (
              <iframe
                title="2"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3163.587648578993!2d-99.16574070186886!3d19.448626698519092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1szocalo!5e0!3m2!1ses-419!2smx!4v1626837172966!5m2!1ses-419!2smx"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                style={{ border: "0" }}
              ></iframe>
            )}

            <Divider />
            <Typography variant="h5" color="initial">
              Descripcion
            </Typography>
            <p>{data.description}</p>
          </Container>
        </>
      )}
    </div>
  );
}

export default Propiedad;
