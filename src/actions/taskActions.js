import { createAction } from 'promise-middleware-redux';
import { createTask, getTasks } from '../services/tasksApi';

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
