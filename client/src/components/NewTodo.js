import React, { useContext, useState } from "react";
import { ToDoContext } from "../context/ToDoContext";
import { TextField, IconButton,  Button, Dialog, 
  DialogContent, DialogContentText, DialogActions } from "@material-ui/core";
import PostAddIcon from "@material-ui/icons/PostAdd";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3),
    borderRadius: '15px 0px 16px 0px'
  },
  label: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
}));

function NewTodo() {
  const classes = useStyles();
  const { addTodo, update, setUpdate } = useContext(ToDoContext);
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <form className={classes.form} onSubmit={(e) => {
      e.preventDefault();
      if (title === "") {
        handleClickOpen();
      } else {
        addTodo({title});
        setUpdate(update+1)
        setTitle("");
      }
    }}>
      <TextField
        className={classes.label}
        id="standard-basic"
        label="What do you have to do?"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <IconButton className={classes.button} color="secondary"
        type='submit'>
          <PostAddIcon />
        </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You cannot submit a blank item.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} 
          variant="contained" color="primary">
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
}

export default NewTodo;
