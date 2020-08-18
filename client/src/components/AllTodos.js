import React, { useContext, useEffect } from "react";
import { ToDoContext } from "../context/ToDoContext";
import { List, Checkbox, IconButton, ListItem,
  ListItemIcon, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  background: {},
  checked: {
    textDecoration: "line-through",
  },
}));

function AllTodos() {
  const classes = useStyles();
  const { todos, checkLoggedIn, toggleTodo, deleteTodo } = useContext(ToDoContext);

  useEffect(() => {
    checkLoggedIn();
    // eslint-disable-next-line
  },[todos])

  return (
    <List className={classes.background}>
      {todos.map((todo) => (
        <ListItem key={`${todos.indexOf(todo)}+${todo._id}`} dense button>
        <ListItemIcon>
          <Checkbox
            checked={todo.complete}
            onChange={() => toggleTodo(todo._id)}
            color="primary"
          />
        </ListItemIcon>
        <ListItemText
          className={todo.complete ? classes.checked : ""}
          primary={todo.title}
        />
        <ListItemSecondaryAction>
          <IconButton
            color="secondary"
            edge="end"
            onClick={() => deleteTodo(todo._id)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      ))}
    </List>
  );
}

export default AllTodos;
