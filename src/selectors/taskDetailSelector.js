export const getTaskDetailState = state => state.taskDetail;
export const getTaskDetail = state => getTaskDetailState(state).detail;
export const getTaskDetailLoading = state => getTaskDetailState(state).loading;
