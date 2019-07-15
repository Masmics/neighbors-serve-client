import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import EditTask from '../../containers/tasks/EditTask';
import DeleteTask from '../../containers/tasks/DeleteTask';

function TaskDetail({ task, owned }) {  //}, owned  }) {
  const {
    title,
    description,
    author
  } = task;
  
  const compare = !owned ?
    (
      <>
        <Link to={'/'}>Home</Link>
        <h2>{title}</h2>
        <h4>{author.email}</h4>
        <p>{description}</p>
      </>
    ) :
    (
      <>
      <Link to={'/'}>Home</Link>
      <h2>{title}</h2>
      <h4>{author.email}</h4>
      <p>{description}</p>
      <EditTask />
      <DeleteTask />
    </>
      
    );
  return compare;
}

TaskDetail.propTypes = {
  owned: PropTypes.bool.isRequired,
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.shape({
      email: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

// const task = TaskDetail.task; // <-- new

export default TaskDetail;
// export { TaskDetail, task }; // <-- new

