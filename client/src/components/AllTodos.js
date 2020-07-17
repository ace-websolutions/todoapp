import React, { useContext } from "react";
import { ToDoContext } from "../context/ToDoContext";
import Todo from "./Todo";
import { List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {},
}));

function AllTodos() {
  const classes = useStyles();
  const { todos } = useContext(ToDoContext);
  return (
    <List className={classes.background}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </List>
  );
}

export default AllTodos;
