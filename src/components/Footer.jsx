import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {
  Grid,
  List,
  Divider,
  ListItem,
  ListItemText,
  ListItemIcon,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { Link } from "react-router-dom";
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  contactformer:{
    textAlign:'center'
  },
  textfield:{
    margin:'15px 0'
  }
}));


export default function Footer() {
  const classes = useStyles();
  return (
    <footer>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item key={1} xs={12} sm={6} md={4}>
            <Typography variant="h6" color="initial">
              Acerca de
            </Typography>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folders">
              <ListItem button>
               <Link to='/acercade' style={{textDecoration: 'inherit' ,color:'initial'}}> <ListItemText primary="Quienes somos" /> </Link>
              </ListItem>
              <ListItemLink href="#simple-list">
              <Link to='/contacto' style={{textDecoration: 'inherit' ,color:'initial'}}> <ListItemText primary="Contacto" /></Link>
              </ListItemLink>
            </List>
          </Grid>
          <Grid item key={2} xs={12} sm={6} md={4}>
            <Typography variant="h6" color="initial">
              Redes sociales
            </Typography>
            <Divider />
            <ListItemLink href='https://www.facebook.com/AMDV-Inmobiliaria-822561464592810'>
              <ListItemIcon>
                <FacebookIcon />
              </ListItemIcon>
              <ListItemText primary="AMDV Inmobiliaria" />
            </ListItemLink>
            <ListItemLink href='https://www.instagram.com/amdv_inmobilaria/?hl=en'>
              <ListItemIcon>
                <InstagramIcon />
              </ListItemIcon>
              <ListItemText primary="Instagram" />
            </ListItemLink>
            <ListItemLink href='https://wa.me/5581355675'>
              <ListItemIcon>
                <WhatsAppIcon />
              </ListItemIcon>
              <ListItemText primary="5581355675" />
            </ListItemLink>
          </Grid>
          <Grid item key={3} xs={12} sm={6} md={4}>
            <Typography variant="h6" color="initial">
              Contactanos
            </Typography>

            <Divider />
            <div className={classes.contactformer}> 
              <TextField
                id="outlined-basic"
                label="Escribe un mensaje"
                variant="outlined"
                className={classes.textfield}
              />
              <Button variant="contained" color="primary" className={classes.textfield}>
                Enviar mensaje
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xs">
          <Typography variant="subtitle1" color="textSecondary">© Copyright 2021 by AMDVinmobiliaria</Typography>
      </Container>
    </footer>
  );
}
