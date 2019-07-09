import taskDetailReducer from './taskDetailReducer';
describe('taskDetailReducer', () => {
  // jest.mock('../services/tasksApi.js', () => ({
  //   getTask() {
  //     return Promise.resolve({});
  //   }
  // }));
  it('exists, placeholder', () => {
    expect(taskDetailReducer).toExist;
  });
});
