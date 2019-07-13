import { createAction } from 'promise-middleware-redux';
import { getTask } from '../services/tasksApi';
import { updateTask } from '../services/tasksApi';

export const [
  fetchTaskDetail,
  FETCH_TASK_DETAIL,
  FETCH_TASK_DETAIL_LOADING
] = createAction('FETCH_TASK_DETAIL', getTask);

export const [
  updateTaskDetail,
  UPDATE_TASK_DETAIL,
  UPDATE_TASK_DETAIL_LOADING
] = createAction('UPDATE_TASK_DETAIL', updateTask);
