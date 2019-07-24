import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Task({ task }) {
  return (
    <Link to={`/${task._id}`}>{task.title}, (by {task.contactName})</Link> // (by {task.author.email})</Link>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    // date: PropTypes.instanceOf(Date), //.isRequired,
    title: PropTypes.string.isRequired,
    contactName: PropTypes.string.isRequired,
    // altEmail: PropTypes.string.isRequired,
    // stAddress: PropTypes.string.isRequired,
    // phone: PropTypes.nu
    // taskType: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Task;

