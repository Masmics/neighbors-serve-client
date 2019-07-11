import React from 'react';
import PropTypes from 'prop-types';

function TaskDetail({ task }) {  //}, owned  }) {
  const {
    title,
    description,
    // author
  } = task;
  
  // console.log('save for later', owned);

  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  );
  // console.log('save', { author });
  // const compare = !owned ?
  //   (
  //     <>
  //       <h2>{title}</h2>
  //       {/* <h4>{author.email}</h4> */}
  //       <p>{description}</p>
  //     </>
  //   ) :
  //   (
  //     <h2>Placeholder for update</h2>
  //   );
  // return compare;
}

TaskDetail.propTypes = {
  owned: PropTypes.bool.isRequired,
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.shape({
      // email: PropTypes.string.isRequired
    })
    // }).isRequired
  }).isRequired
};

export default TaskDetail;
