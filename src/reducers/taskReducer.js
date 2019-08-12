import { 
  NEW_TASK_PENDING, 
  NEW_TASK, 
  FETCH_TASKS_PENDING, 
  FETCH_TASKS, 
  DELETE_TASK_PENDING,
  DELETE_TASK
} from '../actions/taskActions';

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
    case FETCH_TASKS_PENDING:
      return { ...state, loading: true };
    case FETCH_TASKS:
      return { ...state, loading: false, list: action.payload };
    case DELETE_TASK_PENDING:
      return { ...state, loading: true };
    case DELETE_TASK:
      return { ...state, loading: false, list: [...state.list] };
    default:
      return state;
  }
}
