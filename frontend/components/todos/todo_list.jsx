import React from 'react'
import TodoListItem from './todo_list_item'
import TodoForm from '../todo_list/todo_form'

const TodoList = (props) => {
  const todoLi = props.todos.map((todo) => {
    return <TodoListItem key={todo.id} todo={todo}/>;
  });

  return (
    <>
      <TodoForm receiveTodo={props.receiveTodo}/>
      <ul>{todoLi}</ul>
    </>
  );
};

export default TodoList;