import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {  useMediaQuery } from "@material-ui/core";
import DrawerComponent from "./DrawerComponent";
import AddIcon from '@material-ui/icons/Add';
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme)=>({
  navbar: {
    backgroundColor: "#282F44",
    padding: "0 10vw 0 10vw ",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  navbarsmall: {
    backgroundColor: "white",
    padding: "0",
  },
  link:{
    textDecoration: 'none',
    color:'white',
    paddingRight:'20px',
    [theme.breakpoints.down('md')]:{
      color:'gray'
    }
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={isSmall ? classes.navbarsmall : classes.navbar}
        color="secondary"
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h5"
          >
           <Link to='/' className={classes.link}>AMDVinmobiliaria </Link> 
          </Typography>
          {isSmall ? (
            <DrawerComponent />
          ) : (
            <>
              <Typography variant="h6" color="initial">
                <Link to="/en-venta" color="inherit" className={classes.link}>
                  En venta
                </Link>
                <Link to="/en-renta" color="inherit" className={classes.link}>
                  En renta
                </Link>
                <Link to="/terrenos-en-venta" color="inherit" className={classes.link} >
                  Terrenos
                </Link>
              </Typography>
              <Button variant="contained" color="primary" href='/contacto'>
                <AddIcon/>Añadir una propuiedad
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
