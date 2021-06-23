import React from 'react'
import TodoListItem from './todo_list_item'

const TodoList = (props) => {
  const todoLi = props.todos.map((todo) => {
    return <TodoListItem todo={todo} />

  })
  return (
    <ul>{todoLi}</ul>
  )
}

export default TodoList

