import { createAction } from 'promise-middleware-redux';
import { createTask, getTasks, deleteTask } from '../services/tasksApi';

export const [
  newTask,
  NEW_TASK,
  NEW_TASK_PENDING
  
] = createAction('NEW_TASK', createTask);

export const [
  fetchTasks,
  FETCH_TASKS,
  FETCH_TASKS_PENDING
] = createAction('FETCH_TASKS', getTasks);

export const [
  delTask,
  DELETE_TASK,
  DELETE_TASK_PENDING
] = createAction('DELETE_TASK', deleteTask);
