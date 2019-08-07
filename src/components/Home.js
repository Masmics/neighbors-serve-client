import React from 'react';
import CreateTask from '../containers/tasks/CreateTask';
import AllTasks from '../containers/tasks/AllTasks';
import Header from './Header';
// import styles from '../css/styles.css';
import homestyles from '../css/Home.css';

export default function Home() {
  return (
  <>
    <main style={homestyles}>
      <div></div>
      <CreateTask />
      <AllTasks />
    </main>
  </>
  );
}

{/* <h1>Neighbors Serve</h1>
<h3>A PDX Metro Community Volunteer Resource</h3>
<h4>Connecting volunteers with opportunities and notifying the community of unmet needs.</h4> */}
