import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  makeStyles,
  Drawer,
  Divider,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import ApartmentIcon from "@material-ui/icons/Apartment";
import TerrainIcon from "@material-ui/icons/Terrain";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
const DrawerComponent = () => {
  const useStyles = makeStyles((theme) => ({
    drawerContainer: {},
    iconButtonContainer: {
      marginLeft: "auto",
      color: "white",
    },

    menuIconToggle: {
      fontSize: "3rem",
      color: "rgba(0, 0, 0, 0.54)",
    },
  }));

  const [openDrawer, setOpenDrawer] = useState(false);

  //Css
  const classes = useStyles();
  return (
    <>
      <Drawer
        anchor="right"
        classes={{ paper: classes.drawerContainer }}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
      >
        <List>
          <Link
            to="/tipo/casas-en-venta"
            style={{ textDecoration: "inherit", color: "initial" }}
          >
            <ListItem button key={"Casas en venta"}>
              <ListItemIcon>
                <HomeIcon></HomeIcon>
              </ListItemIcon>
              <ListItemText primary={"Casas en venta"} />
            </ListItem>
          </Link>
          <Link
            to="/tipo/casas-en-renta"
            style={{ textDecoration: "inherit", color: "initial" }}
          >
            <ListItem button key={"Casas en renta"}>
              <ListItemIcon>
                <ApartmentIcon />
              </ListItemIcon>
              <ListItemText primary={"Casas en renta"} />
            </ListItem>
          </Link>
          <Link
            to="/tipo/terrenos-en-venta"
            style={{ textDecoration: "inherit", color: "initial" }}
          >
            <ListItem button key={"Terrenos en venta"}>
              <ListItemIcon>
                <TerrainIcon />
              </ListItemIcon>
              <ListItemText primary={"Terrenos en venta"} />
            </ListItem>
          </Link>
          <Divider />
          <Link
            to="/contacto"
            style={{ textDecoration: "inherit", color: "initial" }}
          >
            <ListItem button key={"Añadir propiedad"}>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary={"Añadir propuiedad"} />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      {/* Since this is inside our toolbar we can push it to the end of the toolbar */}
      <IconButton
        className={classes.iconButtonContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.menuIconToggle} />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
