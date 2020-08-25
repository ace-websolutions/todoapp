import React, { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import { ToDoProvider } from "./context/ToDoContext";
import Nav from "./components/Nav";
import Body from "./components/Body";
import { Paper } from "@material-ui/core";
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';

function App() {
  const [primary, setPrimary] = useState(green)
  const [secondary, setSecondary] = useState(yellow)
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
                  <Body dark={dark} />
            </Paper>
        </ThemeProvider>
      </ToDoProvider>
    </Router>
  );
}

export default App;
