import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import EditTask from '../../containers/tasks/EditTask';
import DeleteTask from '../../containers/tasks/DeleteTask';
// import DetailContents from './DetailContents';

function TaskDetail({ task, owned }) {  //}, owned  }) {
  const {
    title,
    // date,
    // taskType,
    contactName,
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
          {/* <DetailContents /> */}
          <h5>{title}</h5>
          <p>posted by {contactName}, at {author.email}</p>
          {/* // on {date}</p> */}
          {/* <h3>Type of Action or Concern: {taskType}</h3> */}
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
          {/* <DetailContents /> */}
          <h5>{title}</h5>
          <p>posted by {contactName} at {author.email}</p> 
          {/* // on {date}</p> */}
          {/* <h3>Type of Action or Concern: {taskType}</h3> */}
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
    // date: PropTypes.instanceOf(Date), // isRequired,
    contactName: PropTypes.string.isRequired,
    // taskType: PropTypes.string.isRequired, 
    description: PropTypes.string.isRequired,
    author: PropTypes.shape({
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default TaskDetail;
