import { FETCH_TASK_DETAIL, FETCH_TASK_DETAIL_LOADING } from '../actions/taskDetailActions';
const initialState = {
  loading: true,
  detail: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_TASK_DETAIL:
      return { ...state, loading: false, detail: action.payload };
    case FETCH_TASK_DETAIL_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
