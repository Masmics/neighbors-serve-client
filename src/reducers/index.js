import { combineReducers } from 'redux';
import tasks from './taskReducer';
import session from './sessionReducer';
import taskDetail from './taskDetailReducer';

export default combineReducers({
  tasks,
  session,
  taskDetail
});
