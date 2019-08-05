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
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Task;

