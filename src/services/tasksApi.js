import { post } from './request';

export const createTask = task => post('/api/v1/tasks', task);

