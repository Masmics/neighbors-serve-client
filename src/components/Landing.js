import React from 'react';
import CreateTask from '../containers/tasks/CreateTask';
import AllTasks from '../containers/tasks/AllTasks';
import Header from './Header';
import Home from './Home';
// import styles from '../css/styles.css';
import styles from '../css/home.css';

export default function Landing() {
  return (
  <>
    <main style={styles}>
      <Header />
      
    </main>
  </>
  );
}
