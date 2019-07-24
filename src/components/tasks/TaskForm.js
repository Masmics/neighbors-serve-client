import React from 'react';
import PropTypes from 'prop-types';

function TaskForm({ onSubmit, onChange, title, contactName, description, submitText }) {  
  return (
    <form onSubmit={onSubmit} netlify="netlify">
      <input name="title" value={title} onChange={onChange} placeholder="Task title" />
      <input name="description" value={description} onChange={onChange} placeholder="Detailed description" />
      {/* <input TaskType dropdown goes here... */}
      <input name="contactName" value={contactName} onChange={onChange} placeholder="Preferred contact name" />
      <button>{submitText}</button>
    </form>
  );
}
TaskForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date), //.isRequired,
  contactName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string
  }),
  submitText: PropTypes.string
};

TaskForm.defaultProps = {
  submitText: 'Submit'
};

export default TaskForm;

