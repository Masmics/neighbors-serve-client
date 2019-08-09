import React from 'react';
import PropTypes from 'prop-types';

const legend = ' Add a Community Volunteer Request or Notice';

function TaskForm({ onSubmit, onChange, title, taskType, contactName, contactPhone, contactEmail, location, streetAddr, description, submitText }) {  
  return (
    <>
    <fieldset style={{ marginLeft: '8px', marginRight: '8px', marginBottom: '15px', paddingBottom: '25px' }}>
      <legend>
        <h3>{legend}</h3>
      </legend>
      <form onSubmit={onSubmit} netlify="netlify">
        <br/>
        <label>Title of Request or Notice:  </label>
        <input size="50" name="title" value={title} onChange={onChange} placeholder="Task Title" />

        <br/>
        <br/>
        <label>Type of Volunteer Work Needed: &nbsp; &nbsp;</label>
        <select name="taskType" value={taskType} onChange={onChange}>
          <option defaultValue>Select One:</option>
          <option value="Labor">Labor</option>
          <option value="Trades">Trades</option>
          <option value="Clerical">Clerical</option>
          <option value="Technical">Technical</option>
          <option value="Teaching">Teaching</option>
          <option value="Caregiving">Caregiving</option>
          <option value="Event">Event</option>
        </select>

        <br/>
        <br/>
        <label id="descLabel">Description - <span>Please describe the work needed. Include any relevant background and special requirements 
          (such as tools or special skills required):</span></label>

        <br/>
        <br/>
        <textarea style={{ fontFamily: 'verdana, arial, sansSerif' }} rows="5" cols="40" name="description" value={description} onChange={onChange} placeholder="Detailed Description" />

        <br/>
        <br/>
        <label>Sector of Portland or Neighboring City:  &nbsp; &nbsp;</label>
        <select name="location" value={location} onChange={onChange}>
          <option defaultValue>Select One:</option>
          <option value="Beaverton">Beaverton, OR</option>
          <option value="Clackamas">Clackamas, OR</option>
          <option value="Gresham">Gresham, OR</option>
          <option value="HappyValley">Happy Valley, OR</option>
          <option value="LakeOswego">Lake Oswego, OR</option>
          <option value="Milwaukie">Milwaukie, OR</option>
          <option value="Downtown">Portland: Downtown</option>
          <option value="North">Portland: North</option>
          <option value="NECloseIn">Portland: NE - Close-In (1st-82nd)</option>
          <option value="NorthEast">Portland: NE - East (83rd-174th)</option>
          <option value="NorthWest">Portland: NorthWest</option>
          <option value="SECloseIn">Portland: SE - Close-In (1st-82nd)</option>
          <option value="SouthEast">Portland: SE - East (83rd-162nd)</option>
          <option value="SouthWest">Portland: SouthWest</option>
          <option value="Sandy">Sandy, OR</option>
          <option value="Troutdale">Troutdale, OR</option>
          <option value="Tualatin">Tualatin, OR</option>
          <option value="Vancouver">Vancouver, WA</option>
        </select>

        <br/>
        <br/>
        <label>Street Address or Neighborhood:  &nbsp; &nbsp;</label>
        <input name="streetAddr" size="51" value={streetAddr} onChange={onChange} placeholder="Location" />

        <br/>
        <br/>
        <label>Name of Contact: &nbsp;&nbsp;</label>
        <input name="contactName" size="32" value={contactName} onChange={onChange} placeholder="Contact Name" />

        <br/>
        <br/>
        <label>Contact Phone: &nbsp;&nbsp;</label>
        <input name="contactPhone" size="34.5" value={contactPhone} onChange={onChange} placeholder="Contact Phone" />

        <br/>
        <br/>
        <label>Contact Email: &nbsp;&nbsp;</label>
        <input name="contactEmail" size="34" value={contactEmail} onChange={onChange} placeholder="Contact Email" />

        <br/>
        <br/>
        <label></label>
        <button>{submitText}</button>

      </form>
    </fieldset>
    </>
  );
}
TaskForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  date: PropTypes.string,
  title: PropTypes.string.isRequired,
  taskType: PropTypes.arrayOf(PropTypes.shape({ // was shape({
    Labor: PropTypes.string, //.bool,
    Trades: PropTypes.string, //.bool,
    Clerical: PropTypes.string, //.bool,
    Technical: PropTypes.string, //.bool,
    Teaching: PropTypes.string, //.bool,
    Caregiving: PropTypes.string, //.bool,
    Event: PropTypes.string, //.bool
  })).isRequired,
  location: PropTypes.arrayOf(PropTypes.shape({ // was shape({
    Beaverton: PropTypes.string, //.bool,
    Clackamas: PropTypes.string, //.bool,
    Gresham: PropTypes.string, //.bool,
    HappyValley: PropTypes.string, //.bool,
    LakeOswego: PropTypes.string, //.bool,
    Milwaukie: PropTypes.string, //.bool,
    Downtown: PropTypes.string, //.bool,
    North: PropTypes.string, //.bool,
    NECloseIn: PropTypes.string, //.bool,
    NorthEast: PropTypes.string, //.bool,
    NorthWest: PropTypes.string, //.bool,
    SECloseIn: PropTypes.string, //.bool,
    SouthEast: PropTypes.string, //.bool,
    SouthWest: PropTypes.string, //.bool,
    Sandy: PropTypes.string, //.bool,
    Troutdale: PropTypes.string, //.bool,
    Tualatin: PropTypes.string, //.bool,
    Vancouver: PropTypes.string, //.bool,
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

