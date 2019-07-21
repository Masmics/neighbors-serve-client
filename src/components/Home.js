import React from 'react';
import CreateTask from '../containers/tasks/CreateTask';
import AllTasks from '../containers/tasks/AllTasks';

export default function Home() {
  return (
  <>
    <h1>Neighbors Serve</h1>
    <div></div>
    <CreateTask />
    <AllTasks />
  </>
  );
}
