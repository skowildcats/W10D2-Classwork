import React from "react";
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import {receiveTodo, receiveTodos, removeTodo} from './actions/todo_actions'
// import 

document.addEventListener("DOMContentLoaded", () => {

  const content = document.getElementById('content')
  window.store = configureStore()
  window.receiveTodo = receiveTodo
  window.receiveTodos = receiveTodos
  window.removeTodo = removeTodo

  ReactDOM.render(<div>Test</div>, content)
})