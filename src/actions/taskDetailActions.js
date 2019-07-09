import { createAction } from 'promise-middleware-redux';
import { getTask } from '../services/tasksApi';

export const [
  fetchTaskDetail,
  FETCH_TASK_DETAIL,
  FETCH_TASK_DETAIL_LOADING
] = createAction('FETCH_TASK_DETAIL', getTask);
