import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Searcher from "./Searcher";
import CloudIcon from "@material-ui/icons/Cloud";
import './hero.css'
const useStyles = makeStyles((theme) => ({
  root: {},
  hero: {
    marginTop: "6vh",
    with: "100%",
    height: "90vh",
    backgroundImage:
    "url(/hero.jpeg)",
    backgroundSize: "110% 110%",
    backgroundPosition: "center center",
    animation: "shrink 5s infinite alternate",
  },
  heroText: {
    [theme.breakpoints.down("md")]: {
      margin: "50px 0 50px 0",
    },
    margin: "50px 0 150px 0",
    padding: "50px 0 0 0",
    color: "white",
    fontWeight: "bold",
  },
  iconcloud: {
    fontSize: "3rem",
  },
  
}));

function Hero(props) {
  const classes = useStyles();
  return (
    <section className={classes.hero}>
      <Container maxWidth="sm">
        <Typography variant="h2" className={classes.heroText}>
          Ecuentra la casa de tus <span className={classes.span}>sueños</span>{" "}
          <CloudIcon className={classes.iconcloud}></CloudIcon>
        </Typography>
        <Searcher className={classes.searcher}></Searcher>
      </Container>
    </section>
  );
}

export default Hero;
