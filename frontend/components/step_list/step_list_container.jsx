import { connect } from 'react-redux';
import StepList from './step_list';
import {stepsByTodoId } from '../../reducers/selector';

const mSTP = state => ({
  steps: stepsByTodoId(state, todo_id)
});

const mDTP = dispatch => ({
  receiveStep: steps => dispatch(receiveStep(steps))
});

export default connect(mSTP, mDTP)(StepList);