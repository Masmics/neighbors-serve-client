import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Task({ task }) {
  return (
    <Link to={`/${task._id}`}>{task.title}, by: anon</Link> // (by {task.author})</Link>
  //  (was task.author.email)
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      email: PropTypes.string,
      image: PropTypes.string
      // id: PropTypes.string.isRequired,   // (was)
      // name: PropTypes.string.isRequired,
      // email: PropTypes.string.isRequired,
      // image: PropTypes.string.isRequired
    })
  }).isRequired
};

export default Task;

