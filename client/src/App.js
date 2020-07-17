import React from "react";
import { ToDoProvider } from "./context/ToDoContext";
import Nav from "./components/Nav";
import Body from "./components/Body";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: "url(/images/beer.jpg) center no-repeat",
    backgroundSize: "cover",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ToDoProvider>
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <Nav />
        </Grid>
        <Grid item container>
          <Grid item xs={1} sm={3} />
          <Grid item className={classes.container} xs={10} sm={6}>
            <Body />
          </Grid>
          <Grid item xs={1} sm={3} />
        </Grid>
      </Grid>
    </ToDoProvider>
  );
}

export default App;
