import React from 'react';
import PropTypes from 'prop-types';
import EditTask from '../../containers/tasks/EditTask';

function TaskDetail({ task, owned }) {  //}, owned  }) {
  const {
    title,
    description,
    author
  } = task;
  
  const compare = !owned ?
    (
      <>
        <h2>{title}</h2>
        <h4>{author.email}</h4>
        <p>{description}</p>
      </>
    ) :
    (
      <EditTask />
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
    //  })
    }).isRequired
  }).isRequired
};

export default TaskDetail;

// console.log('save for later', owned);
// return (
//   <>
//     <h2>{title}</h2>
//     <p>{description}</p>
//   </>
// );
// console.log('save', { author });

