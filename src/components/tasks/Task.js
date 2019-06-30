import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Task({ task }) {
  return (
    // now a Task is an active link in Tasks list
    <Link to={`/${task._id}`}>{task.title} : {task.creator.name}</Link>
    // <Link to={`/${task._id}`}>{task.title} : {task.description}</Link>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    creator: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })//.isRequired //?
  }).isRequired
};

export default Task;

