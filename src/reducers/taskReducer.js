import { 
  NEW_TASK_PENDING, 
  NEW_TASK, 
  FETCH_TASKS_PENDING, 
  FETCH_TASKS } from '../actions/taskActions';

const initialState = {
  loading: false,
  list: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case NEW_TASK_PENDING:
      return { ...state, loading: true };
    // appends the list
    case NEW_TASK:
      return { ...state, loading: false, list: [...state.list, action.payload] };
    case FETCH_TASKS_PENDING:
      return { ...state, loading: true };
    // returns the list
    case FETCH_TASKS:
      return { ...state, loading: false, list: action.payload };
    default:
      return state;
  }
}
