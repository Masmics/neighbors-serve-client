import React from 'react';
import PropTypes from 'prop-types';

function Task({ task }) {
  return (
    <p>{task.title}</p>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default Task;

