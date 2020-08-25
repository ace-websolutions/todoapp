import React, { useContext, useEffect } from "react";
import { ToDoContext } from "../context/ToDoContext";
import { List, Checkbox, IconButton, ListItem, ListItemIcon, 
  ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(3),
    minHeight: '500px',
    borderRadius: '25px'
  },
  checked: {
    textDecoration: "line-through",
  },
  buttonContainer:{
    marginLeft: theme.spacing(3),
  },
  button:{
    display:'none',
    '&:hover':{
      display: 'block'
    }
  },
  item: {
    cursor:'pointer',
    '&:hover + div > $button':{
          display:'block'
    }
  }
}));

function AllTodos() {
  const classes = useStyles();
  const { todos, checkLoggedIn, toggleTodo, deleteTodo,
    update, setUpdate } = useContext(ToDoContext);

  useEffect(() => {
    checkLoggedIn();
    // eslint-disable-next-line
  },[update])

  return (
    <List className={classes.background}>
      {todos.map((todo) => (
        <ListItem key={`${todos.indexOf(todo)}+${todo._id}`} dense 
          button onClick={() => {
            toggleTodo(todo._id)
            setUpdate(update+1)
          }}
          className={classes.item}>
        <ListItemIcon>
          <Checkbox checked={todo.complete} onChange={() => {
            toggleTodo(todo._id) 
            setUpdate(update+1)
          }}
            color="secondary" />
        </ListItemIcon>
        <ListItemText
          className={todo.complete ? classes.checked : ""}
          primary={todo.title}
        />
        <ListItemSecondaryAction className={classes.buttonContainer}>
          <IconButton edge="end" className={classes.button}
            onClick={() => deleteTodo(todo._id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      ))}
    </List>
  );
}

export default AllTodos;
