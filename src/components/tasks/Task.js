import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Task({ task }) {
  return (
    <Link to={`/${task._id}`}>{task.title}, (by {task.contactName})</Link> // (by {task.author.email})</Link>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
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
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Task;

