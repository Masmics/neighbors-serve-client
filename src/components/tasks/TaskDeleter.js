import React from 'react';
import PropTypes from 'prop-types';

function TaskDeleter({ onSubmit, submitText }) {
  return (
    <form onSubmit={onSubmit}>
      <button>{submitText}</button>
    </form>
  );
}

TaskDeleter.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitText: PropTypes.string
};

TaskDeleter.defaultProps = {
  submitText: 'Delete Task'
};

export default TaskDeleter;
