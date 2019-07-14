describe('taskDetailReducer', () => {
  it('exists, placeholder', () => {
    expect.anything();
  });
});

// import reducer from './taskDetailReducer';
// import { FETCH_TASK_DETAIL_LOADING, FETCH_TASK_DETAIL, fetchTaskDetail } from '../actions/taskDetailActions';

// jest.mock('../services/tasksApi.js', () => ({
//   getTask() {
//     // return Promise.resolve([]);
//     return Promise.resolve({});
//   }
// }));

// describe('task detail reducer', () => {
//   it('handles the FETCH_TASK_DETAIL_LOADING action', () => {
//     const initialState = {
//       loading: false,
//       detail: {}
//     };

//     const newState = reducer(initialState, {
//       type: FETCH_TASK_DETAIL_LOADING
//     });

//     expect(newState).toEqual({
//       loading: true,
//       detail: {}
//     });
//   });

//   it('handles the FETCH_TASK_DETAIL action', () => {
//     const initialState = {
//       loading: true,
//       detail: {}
//     };
//     const newState = reducer(initialState, {
//       type: FETCH_TASK_DETAIL,
//       payload: {
//         title: 'I am a fetched task title',
//         description: 'I am a fetched task content',
//         author: 'me'
//       }
//     });
//     expect(newState).toEqual({
//       loading: false,
//       detail: { 
//         title: 'I am a fetched task title', 
//         description: 'I am a fetched task content',
//         author: expect.anything()
//       }
//     });
//   });
// });
