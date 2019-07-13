import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

function Tasks({ tasks }) {
  const taskList = tasks.map(task => (
    <li key={task._id}>
      <Task task={task} />
    </li>
  ));
  return (
    <ul>
      {taskList}
    </ul>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    // })
    }).isRequired
  })).isRequired
};

export default Tasks;

