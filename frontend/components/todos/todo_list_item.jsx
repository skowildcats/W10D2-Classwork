import React from 'react';

const TodoListItem = ({todo, receiveTodo, removeTodo}) => {

  function handleClick(e) {
    e.preventDefault();
    removeTodo(todo);
  }

  function done(e) {
    e.preventDefault()
    todo.done = true;
    receiveTodo(todo);
  }

  function undo(e) {
    e.preventDefault()
    todo.done = false;
    receiveTodo(todo);
  }

  let doneButton = null;
  if (todo.done) {
    doneButton = <button onClick={undo.bind(this)}>Undo</button>;
  } else {
    doneButton = <button onClick={done.bind(this)}>Done</button>;
  }

  return (
    <>
      <li>{todo.title}</li>
      <li>{todo.body}</li>
      <li>done: {`${todo.done}`}</li>
      {doneButton}
      <button onClick={handleClick.bind(this)}>Delete To-Do</button>
    </>
  );
};

export default TodoListItem;