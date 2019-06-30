import React from 'react';
import PropTypes from 'prop-types';
function TaskDetail({ task }) {
  const {
    title,
    description
  } = task;
  return (
   <>
     <h2>{title}</h2>
     <p>{description}</p>
   </>
  );
}
TaskDetail.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};
export default TaskDetail;
