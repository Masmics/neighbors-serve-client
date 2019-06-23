import reducer from './taskReducer';
import { NEW_TASK_PENDING, NEW_TASK } from '../actions/taskActions';

describe('task reducer', () => {
  it('handles the NEW_TASK_PENDING action', () => {
    const initialState = {
      loading: false,
      list: []
    };

    const newState = reducer(initialState, {
      type: NEW_TASK_PENDING
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
      type: NEW_TASK,
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
});


