import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MediaCard from "./MediaCard";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import { getFavorites } from "../service";

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

const useStyles = makeStyles((theme) => ({
  text: {
    margin: "30px 0",
  },
}));
function CarouselCard() {
  const [casas, setCasas] = useState(null);
  const classes = useStyles();
  const fetchApi = async () => {
    const responseJson = await getFavorites();
    setCasas(responseJson);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div>
      <Container maxWidth="md">
        <Typography variant="h4" color="initial" className={classes.text}>
          Propiedades destacadas
        </Typography>
        {casas === null ? (
          "cargando"
        ) : (
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
            {casas.map((casa,index)=>{
              return <MediaCard key={index} state={casa.state} adress={casa.adress} price={casa.price} rooms={casa.rooms} baths={casa.baths} area={casa.area} slug={casa.slug} id={casa.id} ></MediaCard>
            })}
          </Carousel>
        )}
      </Container>
    </div>
  );
}

export default CarouselCard;
