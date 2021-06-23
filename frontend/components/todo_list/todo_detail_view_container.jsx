import {connect} from 'react-redux';
import TodoDetailView from './todo_detail_view';
import {removeTodo} from '../../actions/todo_actions';

const mDTP = dispatch => ({
  // receiveTodo: todo => dispatch(receiveTodo(todo)),
  removeTodo: todo => dispatch(removeTodo(todo))
});

export default connect(null, mDTP)(TodoDetailView);