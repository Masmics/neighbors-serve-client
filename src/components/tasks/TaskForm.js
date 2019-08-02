import React from 'react';
import PropTypes from 'prop-types';

function TaskForm({ onSubmit, onChange, title, taskType, contactName, contactPhone, contactEmail, streetAddr, description, submitText }) {  
  return (
    <form onSubmit={onSubmit} netlify="netlify">
      <input name="title" value={title} onChange={onChange} placeholder="Task title" />
      {/* <input name="taskType" value={taskType} onChange={onChange} placeholder="Type of task" /> */}
      <select name="taskType" value={taskType} onChange={onChange} placeholder="Select One">
        <option value="labor">Labor</option>
        <option value="trades">Trades</option>
        <option value="clerical">Clerical</option>
        <option value="technical">Technical</option>
        <option value="tutoring">Tutoring</option>
        <option value="personCare">Person Care</option>
        <option value="event">Event</option>
      </select>
      <input name="description" value={description} onChange={onChange} placeholder="Detailed description" />
      <select name="location" value={location} onChange={onChange} placeholder="Select Neighborhood/City">
        <option value="beaverton">Beaverton, OR</option>
        <option value="clackamas">Clackamas, OR</option>
        <option value="gresham">Gresham, OR</option>
        <option value="happyValley">Happy Valley, OR</option>
        <option value="lakeOswego">Lake Oswego, OR</option>
        <option value="milwaukie">Milwaukie, OR</option>
        <option value="downtown">Portland: Downtown</option>
        <option value="north">Portland: North</option>
        <option value="southEastClose">Portland: SE - Close-In (1st-82nd)</option>
        <option value="southEast">Portland: SE - East (83rd-162nd)</option>
        <option value="northEastClose">Portland: NE - Close-In (1st-82nd)</option>
        <option value="northEast">Portland: NE - East (83rd-174th)</option>
        <option value="southWest">Portland: SouthWest</option>
        <option value="northWest">Portland: NorthWest</option>
        <option value="south">Portland: South Waterfront (coming soon)</option>
        {/* </select> */}
        <option value="sandy">Sandy, OR</option>
        <option value="troutdale">Troutdale, OR</option>
        <option value="tualatin">Tualatin, OR</option>
        <option value="vancouver">Vancouver, WA</option>
      </select>

      <input name="streetAddr" value={streetAddr} onChange={onChange} placeholder="Location/Street Address" />
      {/* <input TaskType dropdown goes here... */}
      <input name="contactName" value={contactName} onChange={onChange} placeholder="Preferred contact name" />
      <input name="contactPhone" value={contactPhone} onChange={onChange} placeholder="Contact Phone" />
      <input name="contactEmail" value={contactEmail} onChange={onChange} placeholder="Contact Email" />
      <button>{submitText}</button>
    </form>
  );
}
TaskForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  taskType: PropTypes.arrayOf(PropTypes.shape({ // was shape({
    labor: PropTypes.bool,
    trades: PropTypes.bool,
    clerical: PropTypes.bool,
    technical: PropTypes.bool,
    tutoring: PropTypes.bool,
    personCare: PropTypes.bool,
    event: PropTypes.bool
  })).isRequired,
  location: PropTypes.arrayOf(PropTypes.shape({ // was shape({
    beaverton: PropTypes.bool,
    clackamas: PropTypes.bool,
    gresham: PropTypes.bool,
    happyValley: PropTypes.bool,
    lakeOswego: PropTypes.bool,
    milwaukie: PropTypes.bool,
    portland: PropTypes.arrayOf(PropTypes.shape({
      downtown: PropTypes.bool,
      north: PropTypes.bool,
      northEastClose: PropTypes.bool,
      northEast: PropTypes.bool,
      northWest: PropTypes.bool,
      southEastClose: PropTypes.bool,
      southEast: PropTypes.bool,
      southWest: PropTypes.bool
    })),
    sandy: PropTypes.bool,
    troutdale: PropTypes.bool,
    tualatin: PropTypes.bool,
    vancouver: PropTypes.bool,
  })).isRequired,
  streetAddr: PropTypes.string.isRequired,
  contactName: PropTypes.string.isRequired,
  contactPhone: PropTypes.string.isRequired,
  contactEmail: PropTypes.string.isRequired,
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

