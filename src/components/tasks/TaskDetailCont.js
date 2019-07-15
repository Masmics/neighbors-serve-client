import React from 'react';
// import PropTypes from 'prop-types';
import { title, author, description } from './TaskDetail';

export default function TaskDetailCont() {
  return (
    <>
    <h2>{title}</h2>
    <h4>{author.email}</h4>
    <p>{description}</p>
  </>
  );
}
