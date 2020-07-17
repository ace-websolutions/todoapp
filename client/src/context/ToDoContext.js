import React, { createContext, useReducer } from "react";
import { ACTIONS, reducer } from "./AppReducer";

export const ToDoContext = createContext();

export function ToDoProvider({ children }) {
  const [todos, dispatch] = useReducer(reducer, []);

  function addTodo(name) {
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
  }
  function toggleTodo(id) {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: id });
  }
  function deleteTodo(id) {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: id });
  }

  return (
    <ToDoContext.Provider
      value={{
        todos,
        dispatch,
        addTodo,
        toggleTodo,
        deleteTodo,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
}
