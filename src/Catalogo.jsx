import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import MediaCard from "./components/MediaCard";
import { Grid, makeStyles } from "@material-ui/core";
import { useParams } from "react-router-dom";
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));
const Catalogo = () => {
  const classes = useStyles();
  const [casas, setCasas] = useState(null);
  const { type } = useParams();
  const fetchApi = async () => {
    const response = await fetch("http://localhost/AMDVrest/public/api/casas");
    const responseJson = await response.json();
    setCasas(responseJson);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div>
      {casas === null ? (
        "loading"
      ) : (
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {casas.map((casa, index) => (
              <Grid item key={casa.id} xs={12} sm={6} md={4}>
                <MediaCard
                  key={index}
                  state={casa.state}
                  adress={casa.adress}
                  price={casa.price}
                  rooms={casa.rooms}
                  baths={casa.baths}
                  area={casa.area}
                  slug={casa.slug}
                  id={casa.id}
                ></MediaCard>
              </Grid>
            ))}
            
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default Catalogo;
