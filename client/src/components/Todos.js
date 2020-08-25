import React from "react";
import { Grid, makeStyles, Divider } from '@material-ui/core'
import NewTodo from "./NewTodo";
import AllTodos from "./AllTodos";

function Todos({ dark }) {
  const useStyles = makeStyles((theme) => ({
    center: {
      display:'flex',
      flexDirection: 'column',
      justifyContent: "flex-start",
      alignItems: 'center',
      backgroundColor: dark ? theme.palette.primary[600]:theme.palette.primary[300],
      padding:theme.spacing(3),
      height:'100vh'
      },
  }))


  const classes = useStyles();

  return (
    <Grid container className={classes.body}>
      <Grid item xs={1} sm={3} />
        <Grid container item xs={10} sm={6} className={classes.center}>
          <NewTodo />
          <Divider />
          <AllTodos />
        </Grid>
       <Grid item xs={1} sm={3} />
     </Grid>
  );
}

export default Todos;
