import reducer from './taskReducer';
// import { NEW_TASK_PENDING, NEW_TASK, FETCH_TASKS_PENDING, FETCH_TASKS } from '../actions/taskActions';

jest.mock('../services/auth.js'); //
jest.mock('../services/tasksApi.js'); // end
// jest.mock('../services/tasksApi.js', () => ({
//   createTask() {
//     return Promise.resolve({}); // []
//   },
//   getTasks() {
//     return Promise.resolve({}); // []
//   }
// }));

describe('task reducer', () => {
  it('handles the NEW_TASK_PENDING action', () => {
    const initialState = {
      loading: false,
      list: []
    };

    const newState = reducer(initialState, {
      // type: NEW_TASK_PENDING
      type: 'NEW_TASK_PENDING'
    });

    expect(newState).toEqual({
      loading: true,
      list: []
    });
  });

  it('handles the NEW_TASK action', () => {
    const initialState = {
      loading: true,
      list: []
    };
    const newState = reducer(initialState, {
      type: 'NEW_TASK',
      // type: NEW_TASK,
      payload: {
        title: 'I am a new task',
        description: 'new task content here'
      }
    });

    expect(newState).toEqual({
      loading: false,
      list: [{ title: 'I am a new task', description: 'new task content here' }]
    });
  });

  it('handles the FETCH_TASKS_PENDING action', () => {
    const initialState = {
      loading: false,
      list: []
    };

    const newState = reducer(initialState, {
      type: 'FETCH_TASKS_PENDING'
      // type: FETCH_TASKS_PENDING
    });

    expect(newState).toEqual({
      loading: true,
      list: []
    });
  });
  it('handles the FETCH_TASKS action', () => {
    const initialState = {
      loading: true,
      list: []
    };
    const newState = reducer(initialState, {
      type: 'FETCH_TASKS',
      // type: FETCH_TASKS,
      payload: [{ title: 'I am a fetched task list', description: 'fetched task list here' }]
    });

    expect(newState).toEqual({
      loading: false,
      list: [{ title: 'I am a fetched task list', description: 'fetched task list here' }]
    });
  });
});