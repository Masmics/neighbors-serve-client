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
          {/* <DetailContents /> */}
          <h5>{title}</h5>
          <p>posted by {contactName}, at {author.email}</p>
          {/* <p>{formattedDate}</p> */}
          <p>{date}</p>
          {/* <h3>Type of Action or Concern: {taskType}</h3> */}
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
          {/* <DetailContents /> */}
          <h5>{title}</h5>
          <p>posted by {contactName}, at {author.email}</p>
          <p>{date}</p>
          {/* <p>{formattedDate}</p> */}
          {/* <h3>Type of Action or Concern: {taskType}</h3> */}
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
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default TaskDetail;
