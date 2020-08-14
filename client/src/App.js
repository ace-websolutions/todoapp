import React, { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import { ToDoProvider } from "./context/ToDoContext";
import Nav from "./components/Nav";
import Body from "./components/Body";
import { Grid, Paper } from "@material-ui/core";
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";
import lime from '@material-ui/core/colors/lime';
import blueGrey from '@material-ui/core/colors/blueGrey';

function App() {
  const [primary, setPrimary] = useState(lime)
  const [secondary, setSecondary] = useState(blueGrey)
  const [dark, setDark] = useState(false)

  const themeCustom= createMuiTheme({
    palette:{
      primary: primary,
      secondary: secondary,
      type: dark ? 'dark': 'light'
    }
  })
  const useStyles = makeStyles((theme) => ({
    paper:{
      minHeight: '100vh',
      height:'100%',
      backgroundColor: dark ? themeCustom.palette.background.default:'#e3e3e3',
      
    },
    body:{
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    center: {
      display:'flex',
      justifyContent: "center",
      alignItems: 'center'
    }
  }))
  const classes = useStyles();

  return (
    <Router>
      <ToDoProvider>
        <ThemeProvider theme={themeCustom}>
          <Paper className={classes.paper}>
              <Nav dark={dark} setDark={setDark} primary={primary} setPrimary={setPrimary} secondary={secondary} setSecondary={setSecondary} />
              <Grid container className={classes.body}>
                <Grid item xs={1} sm={3} />
                <Grid item xs={10} sm={6}>
                  <Body />
                </Grid>
                <Grid item xs={1} sm={3} />
              </Grid>
            </Paper>
        </ThemeProvider>
      </ToDoProvider>
    </Router>
  );
}

export default App;
