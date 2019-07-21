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
        <h4>
          <Link to={'/'}>Home</Link>
        </h4>
        <div>
          <h2>Task Detail</h2>
        </div>
        <div>
          <h5>{title}</h5>
          <p>by {author.name} ({author.email})</p>
          <p>{description}</p>
        </div>
      </>
    ) :
    (
      
      <>
        <h4>
          <Link to={'/'}>Home</Link>
        </h4>
        <div>
          <h2>Task Detail</h2>
        </div>
        <div>
          <h4>{title}</h4>
          <p>by {author.name} ({author.email})</p>
          <p>{description}</p>
        </div>
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

