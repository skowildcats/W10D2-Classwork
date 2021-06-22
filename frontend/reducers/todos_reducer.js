import { bindActionCreators } from 'redux';
import { RECEIVE_TODO, RECEIVE_TODOS, receiveTodo, receiveTodos, REMOVE_TODO, removeTodo} from '../actions/todo_actions'

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const todosReducer = (state = initialState, action) => {

  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_TODOS:
      let todo_map = {}
      action.todos.map((todo) => {
        todo_map[todo.id] = todo
      })
      return todo_map
    case RECEIVE_TODO:
      newState[action.todo.id] = action.todo
      return newState
    case REMOVE_TODO:
      delete(newState[action.id]) 
      return newState
    default:
      return state;
  }
};



export default todosReducer;

// Object.freeze(state); // throw an error if we try to mutate state object
// const newState = Object.assign({}, state);