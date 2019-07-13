import { post, get, put } from './request';

export const createTask = task => post('/api/v1/tasks', task);
export const getTasks = () => get('/api/v1/tasks');
export const getTask = id => get(`/api/v1/tasks/${id}`);
export const updateTask = task => put(`/api/v1/tasks/${task._id}`, task);
