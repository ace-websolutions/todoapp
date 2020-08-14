import React, { useContext } from "react";
import { ToDoContext } from "../context/ToDoContext";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  checked: {
    textDecoration: "line-through",
  },
}));

function Todo({ todo }) {
  const classes = useStyles();
  const { toggleTodo, deleteTodo } = useContext(ToDoContext);
  return (
    <ListItem dense button>
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
  );
}

export default Todo;
