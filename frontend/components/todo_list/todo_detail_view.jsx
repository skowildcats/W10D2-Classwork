import React from 'react'

const TodoDetailView = ({todo, removeTodo}) => {

  function deleteClick(e) {
    e.preventDefault();
    removeTodo(todo);
  }

  return (
    <>
      <p>{todo.body}</p>
      <p>done: {`${todo.done}`}</p>
      <button onClick={deleteClick}>Delete To-Do</button>
    </>

  );
};

export default TodoDetailView;