import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Container, Grid } from "@material-ui/core";
const useStyle = makeStyles((theme) => ({
  imageheader: {
    paddingTop: "10vh",
    height: "35vh",
    backgroundImage: "url(/city.jpeg)",
  },
  image: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    width: "50%",
    padding: "20px",
  },
  text: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    width: "50%",
    padding: "20px",
  },
  container: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));
function AboutUs(props) {
  const classes = useStyle();
  return (
    <>
      <div className={classes.imageheader}>
        <Typography variant="h2" style={{color:'white'}} align="center">
          Acerca de nosotros
        </Typography>
      </div>
      <Container maxWidth="md">
        <Grid
          container
          spacing={2}
          justifyContent="center"
          className={classes.container}
        >
          <img src="/hero.jpeg" className={classes.image} alt='simpleimage'></img>

          <p className={classes.text}>
            Somos una empresa Inmobiliaria que garantiza en el mercado un trato
            basado en honestidad, integridad, ética y profesionalismo en los
            negocios. Esa identidad se nutre de un sentido evolutivo, que día a
            día, mientras que conserva sus principios y se adapta a las nuevas
            necesidades del mercado se acrecienta fortaleciendo su presencia y
            capacidad de gestión. Hemos desarrollado con una visión estratégica,
            un sistema que orientamos a la gestión para lograr respuestas
            específicas a las necesidades de nuestros clientes, brindando
            soluciones integrales y generando el nivel de rentabilidad que
            asegure su crecimiento y continuidad para alcanzar objetivos
            comerciales de excelencia. Nuestra Inmobiliaria brinda respuestas a
            cada desafío planteado con agilidad y creatividad comercial, pero
            también con solidez técnica, que nos permite dar un trato exclusivo
            y personalizado, aportando una dinámica basada en nuevas ideas,
            tecnologías y el marketing aplicado al negocio en el cual nos
            destacamos por sobre nuestros competidores.
          </p>
        </Grid>
      </Container>
    </>
  );
}

export default AboutUs;
