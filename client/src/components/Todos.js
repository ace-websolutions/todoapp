import React from "react";
import { Grid, makeStyles } from '@material-ui/core'
import NewTodo from "./NewTodo";
import AllTodos from "./AllTodos";

const useStyles = makeStyles((theme) => ({
  center: {
    display:'flex',
    justifyContent: "center",
    alignItems: 'center'
    },
  body:{
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}))

function Todos() {
  const classes = useStyles();

  return (
    <Grid container className={classes.body}>
      <Grid item xs={1} sm={3} />
        <Grid container item xs={10} sm={6} className={classes.center}>
          <NewTodo />
          <AllTodos />
        </Grid>
       <Grid item xs={1} sm={3} />
     </Grid>
  );
}

export default Todos;
