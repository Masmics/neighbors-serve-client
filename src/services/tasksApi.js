import { post, get } from './request';

export const createTask = task => post('/api/v1/tasks', task);
export const getTasks = () => get('/api/v1/tasks');
export const getTask = id => get(`/api/v1/tasks/${id}`);

