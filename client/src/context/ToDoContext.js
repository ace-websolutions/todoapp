import React, { createContext, useReducer, useState } from "react";
import { ACTIONS, MESSAGE, INITIAL_TODOS, reducer } from "./AppReducer";
import axios from 'axios'

export const ToDoContext = createContext();

export function ToDoProvider({ children }) {
  const [todos, dispatch] = useReducer(reducer, INITIAL_TODOS);
  // const [loading, setLoading] = useState(false)
  const [update, setUpdate] = useState(0)
  const [snackMessage, setSnackMessage] = useState(undefined)
  const [userData, setUserData] = useState({token: undefined, user: undefined})

  const config = {
      headers: {
          "x-auth-token": userData.token || localStorage.getItem('x-auth-token')
      }
  }
const configData = {
      headers: {
          'Content-Type':'application/json',
          "x-auth-token": userData.token || localStorage.getItem('x-auth-token')
      }
  }

  const checkLoggedIn = async () => {
    try{
      let token = localStorage.getItem('x-auth-token')
      setUserData({...userData, token})
      if(token === null){
        localStorage.setItem('x-auth-token', "")
        token = ""
      }
      const tokenRes = await axios.post('/api/v1/users/tokenValid', null, {headers: {'x-auth-token':token}})
      if(tokenRes.data){
        const userRes = await axios.get('/api/v1/users/', {headers: {'x-auth-token':token}})
        setUserData({...userData, token, user:userRes.data})
        getTodo();
      }
    }catch(err){
      console.log(err)
    }
  }
  const getTodo = async () => {
    try{
      const res = await axios.get('/api/v1/todos', config)
      dispatch({type: ACTIONS.GET_TODO, payload: res.data})
    }catch(err){
      console.log(err);
    }
  }
  const addTodo = async (todo) => {
    try{
      const res = await axios.post('/api/v1/todos', todo, configData)
      dispatch({ type: ACTIONS.ADD_TODO, payload: res.data});
      setUpdate(update+1)
      setSnackMessage(MESSAGE.ADD_TODO)
    }catch(err){
      console.log(err);
    }
  }
  const toggleTodo = async (id) => {
    try{
      await axios.post(`/api/v1/todos/${id}`, null, configData)
      dispatch({ type: ACTIONS.TOGGLE_TODO, payload: id });
      setUpdate(update+1)
    }catch(err){
      console.log(err)
    }
  }
  const deleteTodo = async (id) => {
    try{
      await axios.delete(`/api/v1/todos/${id}`, config)
      dispatch({ type: ACTIONS.DELETE_TODO, payload: id });
      setUpdate(update+1)
      setSnackMessage(MESSAGE.DELETE_TODO)
    }catch(err){
      console.log(err)
    }
  }

  return (
    <ToDoContext.Provider
      value={{
        todos, dispatch, getTodo, addTodo,toggleTodo,
        deleteTodo, snackMessage, setSnackMessage,
        userData, setUserData, checkLoggedIn, config,
        configData, update, setUpdate
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
}
