import React, { useContext, useEffect } from "react";
import { ToDoContext } from "../context/ToDoContext";
import Todo from "./Todo";
import { List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {},
}));

function AllTodos() {
  const classes = useStyles();
  const { todos, checkLoggedIn } = useContext(ToDoContext);

  useEffect(() => {
    checkLoggedIn();
    // eslint-disable-next-line
  },[todos])

  return (
    <List className={classes.background}>
      {todos.map((todo) => (
        <Todo key={todo._id} todo={todo} />
      ))}
    </List>
  );
}

export default AllTodos;
