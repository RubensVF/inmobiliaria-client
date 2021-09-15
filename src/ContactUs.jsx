import {
  makeStyles,
  Typography,
  Container,
  ListItem,
  ListItemText,
  ListItemIcon,
  TextField,
  Button,
} from "@material-ui/core";
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
const useStyle = makeStyles((theme) => ({
  imageheader: {
    paddingTop: "10vh",
    height: "35vh",
    backgroundImage: "url(/city.jpeg)",
  },
  buttonsfirst:{
      width:'40%',
      margin:'15px',
      [theme.breakpoints.down("md")]: {
        width:'85%',
      }
  },
  buttonsecond:{
    width:'85%',
    margin:'15px'
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
      margin:'5px'
    },
    margin:'30px'
  },
  form:{
      justifyContent:'center',
      textAlign:'center'
  }
}));
function ContactUs(props) {
  const classes = useStyle();
  return (
    <>
      <div className={classes.imageheader}>
        <Typography variant="h2" style={{color:'white'}} align="center">
          Acerca de nosotros
        </Typography>
      </div>
      <Container maxWidth="md">
        <div
          className={classes.container}
        >
          <div>
            <Typography variant="h6" color="initial">
              Contactanos
            </Typography>
            <p>Contactanos directamente en alguna de nuestras redes sociales</p>
            <ListItemLink>
              <ListItemIcon>
                <FacebookIcon />
              </ListItemIcon>
              <ListItemText primary="AMDV Inmobiliaria" />
            </ListItemLink>
            <ListItemLink>
              <ListItemIcon>
                <InstagramIcon />
              </ListItemIcon>
              <ListItemText primary="Instagram" />
            </ListItemLink>
            <ListItemLink>
              <ListItemIcon>
                <WhatsAppIcon />
              </ListItemIcon>
              <ListItemText primary="5581355675" />
            </ListItemLink>
          </div>
          <div className={classes.form}>
            <TextField id="outlined-basic" label="Nombre" variant="outlined" className={classes.buttonsfirst}/>
            <TextField id="outlined-basic" label="Correo" variant="outlined" className={classes.buttonsfirst}/>
            <TextField id="outlined-basic" label="Asunto" variant="outlined" className={classes.buttonsecond}/>
            <TextField
              id="outlined-multiline-static"
              label="Mensaje    "
              multiline
              rows={4}
              variant="outlined"
              className={classes.buttonsecond}      
            />
            <Button variant="contained" color="primary" className={classes.button}>
              Enviar
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ContactUs;
