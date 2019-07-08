export const getTaskDetailState = state => state.taskDetail;
export const getTaskDetail = state => getTaskDetailState(state).detail;

export const getTaskDetailTitle = state => getTaskDetail(state).title;
export const getTaskDetailDescription = state => getTaskDetail(state).description;

export const getTaskDetailLoading = state => getTaskDetailState(state).loading;

// export const getTaskDetailState = state => state.task.taskDetail;
// export const getTaskDetail = state => getTaskDetailState(state).task.detail;

// export const getTaskDetailTitle = state => getTaskDetail(state).task.title;
// export const getTaskDetailDescription = state => getTaskDetail(state).task.description;

// export const getTaskDetailLoading = state => getTaskDetailState(state).task.loading;

