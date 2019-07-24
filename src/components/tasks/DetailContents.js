import React from 'react';
// import PropTypes from 'prop-types';
import { title, taskType, author, description } from './TaskDetail';

export default function DetailContents({
  render() {
    return (
      <>
        <h2>{title}</h2>
        <h3>Task Type: {taskType}</h3>
        <h4>posted by {author.name} at {author.email}</h4>
        <p>{description}</p>
      </>
    );  
  }
});
