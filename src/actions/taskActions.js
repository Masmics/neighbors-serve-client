import { createAction } from 'promise-middleware-redux';
import { createTask } from '../services/tasksApi';

export const [
  newTask,
  NEW_TASK,
  NEW_TASK_PENDING
  
] = createAction('NEW_TASK', createTask);

