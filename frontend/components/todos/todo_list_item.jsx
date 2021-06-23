import React from 'react';

const TodoListItem = ({todo}) => {
  return (
    <>
      <li>{todo.title}</li>
      <li>{todo.body}</li>
      <li>done: {`${todo.done}`}</li>
    </>
  );
};

export default TodoListItem;