import React, { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import { ToDoProvider } from "./context/ToDoContext";
import Nav from "./components/Nav";
import Body from "./components/Body";
import { Grid, Paper } from "@material-ui/core";
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";
import green from '@material-ui/core/colors/green';
import blueGrey from '@material-ui/core/colors/blueGrey';

function App() {
  const [primary, setPrimary] = useState(green)
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
      backgroundColor: '#f6f6f6',
      display:'flex',
      flexDirection: 'column',
    },
  }))
  const classes = useStyles();

  return (
    <Router>
      <ToDoProvider>
        <ThemeProvider theme={themeCustom}>
          <Paper className={classes.paper}>
              <Nav dark={dark} setDark={setDark} primary={primary} setPrimary={setPrimary} secondary={secondary} setSecondary={setSecondary} />
                  <Body />
            </Paper>
        </ThemeProvider>
      </ToDoProvider>
    </Router>
  );
}

export default App;
