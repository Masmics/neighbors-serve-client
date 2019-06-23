import { NEW_TASK_PENDING, NEW_TASK } from '../actions/taskActions';

const initialState = {
  loading: false,
  list: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case NEW_TASK_PENDING:
      return { ...state, loading: true };
    case NEW_TASK:
      return { ...state, loading: false, list: [...state.list, action.payload] };
    default:
      return state;
  }
}
