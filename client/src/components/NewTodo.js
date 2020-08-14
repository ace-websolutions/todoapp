import React, { useContext, useState } from "react";
import { ToDoContext } from "../context/ToDoContext";
import { FormControl, TextField, Button, Dialog, DialogContent,
  DialogContentText, DialogActions } from "@material-ui/core";
import PostAddIcon from "@material-ui/icons/PostAdd";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  label: {
    flexGrow: 1,
  },
  button: {
    marginLeft: "1rem",
  },
}));

function NewTodo() {
  const classes = useStyles();
  const { addTodo } = useContext(ToDoContext);
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <FormControl className={classes.form}>
      <TextField
        className={classes.label}
        id="standard-basic"
        label="What do you have to do?"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={(e) => {
          e.preventDefault();
          if (title === "") {
            handleClickOpen();
          } else {
            addTodo({title});
            setTitle("");
          }
        }}
        startIcon={<PostAddIcon />}
      >
        Add
      </Button>
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
          <Button onClick={handleClose} color="primary">
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </FormControl>
  );
}

export default NewTodo;
