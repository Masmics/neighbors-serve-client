import React from 'react';
import CreateTask from '../containers/tasks/CreateTask';
import AllTasks from '../containers/tasks/AllTasks';

export default function Home() {
  return (
  <>
    <CreateTask />
    <AllTasks />
  </>
  );
}
