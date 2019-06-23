import { newTask }  from './taskActions';

jest.mock('../services/tasksApi.js', () => ({
  createTask() {
    return Promise.resolve([]);
  }
}));

describe('taskActions', () => {
  it('facilitates an add-task action', () => {
    const taskAction = newTask({
      title: 'my task',
      description: 'help me fill a pothole!'
    });
    expect(taskAction).toEqual({
      type: 'NEW_TASK',
      pendingType: 'NEW_TASK_PENDING',
      fulfilledType: 'NEW_TASK_FULFILLED',
      rejectedType: 'NEW_TASK_REJECTED',
      payload: expect.any(Promise)
    });
  });
});

