import React from 'react';
import {connect} from 'react-redux';
import TodoList from './todo_list';
import allTodos from '../../reducers/selector';

const mSTP = state => ({
  todos: allTodos(state)
});

const mDTP = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo))
});

export default connect(mSTP, mDTP)(TodoList);

