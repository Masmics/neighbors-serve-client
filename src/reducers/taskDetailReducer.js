// blame me
import { FETCH_TASK_DETAIL, FETCH_TASK_DETAIL_LOADING } from '../actions/taskDetailActions';
const initialState = {
  loading: true,
  // loading: false
  detail: {}
  //?
  // detail: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    // and me
    case FETCH_TASK_DETAIL:
      return { ...state, loading: false, detail: action.payload };
    case FETCH_TASK_DETAIL_LOADING:
      return { ...state, loading: true };
    // to here
    default:
      return state;
  }
}
 
