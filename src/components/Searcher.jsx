import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { getStates } from "../service";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  textfield: {
    width:'60%',
    [theme.breakpoints.down('md')]:{
      width :'100%'
    },
  },
  container:{
    padding:'10px 35px',
    display:'flex',
    justifyContent:'space-between',
    [theme.breakpoints.down('md')]:{
      flexDirection :'column'
    }
  },
  button:{
    [theme.breakpoints.down('md')]:{
      margin:'15px 0'
    }
    
  }
}));

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [values,setValues] = useState([]);
  const loadStates = async ()=>{
    const res = await getStates();
    setValues(res);
  }

  useEffect(()=>{
    loadStates();
  },[])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [currency, setCurrency] = React.useState('');

  const handleChangeCurrency = (event) => {
    setCurrency(event.target.value);
  };
  const url= ()=>{
    let tipo='';
    if(value===0)
      tipo='casas-en-venta';
    if(value===1)
      tipo='casas-en-reta';
    if(value===2)
      tipo='terrenos-en-venta';  
    return tipo+'/'+currency;
  }

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="En venta" />
        <Tab label="En renta" />
        <Tab label="Terrenos" />
      </Tabs>
      <div className={classes.container}>
        <TextField
          id="standard-select-currency"
          select
          label="Estado"
          value={currency}
          onChange={handleChangeCurrency}
          className={classes.textfield}
        >
          {values.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <Link
            to={`${url()}`}
            style={{ textDecoration: "inherit", color: "initial" }}
          >
        <Button variant="contained" color="primary" startIcon={<SearchIcon/>} className={classes.button}>
          Buscar
        </Button>
        </Link>
      </div>
    </Paper>
  );
}
