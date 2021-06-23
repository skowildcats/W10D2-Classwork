import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root"

import configureStore from './store/store';
import {receiveTodo, receiveTodos, removeTodo} from './actions/todo_actions';
import {receiveStep, receiveSteps, removeStep, toggleStep} from './actions/step_actions';

document.addEventListener("DOMContentLoaded", () => {
  window.store = configureStore();
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.removeTodo = removeTodo;
  window.receiveStep = receiveStep;
  window.receiveSteps = receiveSteps;
  window.removeStep = removeStep;
  window.toggleStep = toggleStep;

  const content = document.getElementById('content');
  ReactDOM.render(<Root store={store}/>, content);
});