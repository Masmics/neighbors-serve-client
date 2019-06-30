import { combineReducers } from 'redux';
import tasks from './taskReducer';
import session from './sessionReducer';

export default combineReducers({
  tasks,
  session
});
