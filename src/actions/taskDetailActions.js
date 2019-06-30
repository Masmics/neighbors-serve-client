import { createAction } from 'promise-middleware-redux';
//?
// import { getTaskDetail } from '../services/tasksApi';
import { getTask } from '../services/tasksApi';

export const [
  fetchTaskDetail,
  FETCH_TASK_DETAIL,
  FETCH_TASK_DETAIL_LOADING,
  //?
// ] = createAction('FETCH_TASK_DETAIL', getTaskDetail);
] = createAction('FETCH_TASK_DETAIL', getTask);
