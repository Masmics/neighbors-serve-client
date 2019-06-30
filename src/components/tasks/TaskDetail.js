import React from 'react';
import PropTypes from 'prop-types';

function TaskDetail({ task }) {
  const {
    title,
    description,
    creator
  } = task;

  return (
    <>
      <h2>{title}</h2>
      <h4>{creator.name}</h4>
      <p>{description}</p>
    </>
  );
}

TaskDetail.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    creator: PropTypes.shape({
      // id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      // email: PropTypes.string.isRequired,
      // image: PropTypes.string.isRequired
    }).isRequired
  }).isRequired 
};

export default TaskDetail;
