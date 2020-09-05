import React from "react";
import { Grid, makeStyles, Container } from '@material-ui/core'
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
      height:'100%'
      },
  }))


  const classes = useStyles();

  return (
    <Container maxWidth='lg'>
      <Grid container className={classes.center}>
        <Grid item xs={12} sm={8} >
          <NewTodo />
          <AllTodos />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Todos;
