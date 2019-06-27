import React from 'react';
import PropTypes from 'prop-types';

function Task({ task }) {
  return (
    <p>{task.title} : {task.description}</p>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    // creator: PropTypes.shape({
    //   email: PropTypes.string.isrequired
    // })
  }).isRequired
};

export default Task;

