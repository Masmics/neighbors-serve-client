import React from 'react';
import PropTypes from 'prop-types';

function TaskForm({ onSubmit, onChange, title, description, submitText }) {  
  return (
    <form onSubmit={onSubmit} netlify="netlify">
      <input name="title" value={title} onChange={onChange} />
      <input name="description" value={description} onChange={onChange} />
      <button>{submitText}</button>
    </form>
  );
}
TaskForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.shape({
    email: PropTypes.string
  }),
  submitText: PropTypes.string
};

TaskForm.defaultProps = {
  submitText: 'Submit'
};

export default TaskForm;

