import React from 'react';
import PropTypes from 'prop-types';

const button = {
  borderRadius: '28px', color: '3114cc', backgroundColor: '#E4FFBF',
  width: '90px', boxShadow: '4px 4px 4px 4px', textAlign: 'center'
};

function TaskDeleter({ onSubmit, submitText }) {
  return (
    <form onSubmit={onSubmit}>
      <button style={button}><b>{submitText}</b></button>
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
