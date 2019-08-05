import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import EditTask from '../../containers/tasks/EditTask';
import DeleteTask from '../../containers/tasks/DeleteTask';
// import DetailContents from './DetailContents';

function TaskDetail({ task, owned }) {  //}, owned  }) {
  const {
    title,
    taskType,
    date,
    location, 
    streetAddr,
    contactName,
    contactPhone,
    contactEmail,
    description,
    author
  } = task;
  
  const formattedDate = function parseDate(date) {
    date = String(date).substr(0, 9);
    return date;
  };

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
          <p>posted by {contactName}, at {author.email}</p>
          {/* <p>{formattedDate}</p> */}
          <p>{date}</p>
          <p>Task Type: {taskType}</p>
          <p>Description: {description}</p>
          <p>Location/Neighborhood: {location}</p>
          <p>Street Address/Intersection: {streetAddr}</p>
          <p>Contact Phone: {contactPhone}</p>
          <p>Contact Email: {contactEmail}</p>
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
          <h5>{title}</h5>
          <p>posted by {contactName}, at {author.email}</p>
          <p>{date}</p>
          {/* <p>{formattedDate}</p> */}
          <p>Task Type: {taskType}</p>
          <p>Description: {description}</p>
          <p>Location/Neighborhood: {location}</p>
          <p>Street Address/Intersection: {streetAddr}</p>
          <p>Contact Phone: {contactPhone}</p>
          <p>Contact Email: {contactEmail}</p>
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
    date: PropTypes.string.isRequired,
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
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default TaskDetail;
