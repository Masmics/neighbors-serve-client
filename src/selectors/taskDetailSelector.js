export const getTaskDetailState = state => state.taskDetail;
export const getTaskDetail = state => getTaskDetailState(state).detail;

export const getTaskDetailTitle = state => getTaskDetail(state).title;
export const getTaskDetailDescription = state => getTaskDetail(state).description;

export const getTaskDetailLoading = state => getTaskDetailState(state).loading;
