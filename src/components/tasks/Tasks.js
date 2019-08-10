import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

function Tasks({ tasks }) {
  const taskList = tasks.map(task => (
    <li key={task._id}>
      <Task task={task} />
    </li>
  ));

  return (
    <ul>
      {taskList}
    </ul>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    taskType: PropTypes.arrayOf(PropTypes.shape({
      Labor: PropTypes.string,
      Trades: PropTypes.string,
      Clerical: PropTypes.string,
      Technical: PropTypes.string,
      Teaching: PropTypes.string,
      Caregiving: PropTypes.string,
      Event: PropTypes.string,
    })).isRequired,
    location: PropTypes.arrayOf(PropTypes.shape({
      Beaverton: PropTypes.string,
      Clackamas: PropTypes.string,
      Gresham: PropTypes.string,
      HappyValley: PropTypes.string,
      LakeOswego: PropTypes.string,
      Milwaukie: PropTypes.string,
      Downtown: PropTypes.string,
      North: PropTypes.string,
      NECloseIn: PropTypes.string,
      NorthEast: PropTypes.string,
      NorthWest: PropTypes.string,
      SECloseIn: PropTypes.string,
      SouthEast: PropTypes.string,
      SouthWest: PropTypes.string,
      Sandy: PropTypes.string,
      Troutdale: PropTypes.string,
      Tualatin: PropTypes.string,
      Vancouver: PropTypes.string,
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
  })).isRequired
};

export default Tasks;

