import { newTask, fetchTasks }  from './taskActions';
// mock to replace dependencies for local testing
jest.mock('../services/tasksApi.js', () => ({
  createTask() {
    return Promise.resolve([]); // ({})?
  },
  getTasks() {
    return Promise.resolve([]);
  }
}));

describe('taskActions', () => {
  it('facilitates an add-task action', () => {
    const taskAction = newTask({
      title: 'my task',
      description: 'help me fill a pothole!',
    });
    expect(taskAction).toEqual({
      type: 'NEW_TASK',
      pendingType: 'NEW_TASK_PENDING', //
      fulfilledType: 'NEW_TASK_FULFILLED',
      rejectedType: 'NEW_TASK_REJECTED',
      payload: expect.any(Promise)
    });
  });

  it('facilitates a get-task-list action', () => {
    const taskAction = fetchTasks();

    expect(taskAction).toEqual({
      type: 'FETCH_TASKS',
      pendingType: 'FETCH_TASKS_PENDING',
      fulfilledType: 'FETCH_TASKS_FULFILLED',
      rejectedType: 'FETCH_TASKS_REJECTED',
      payload: expect.any(Promise)
    });
  });
});

