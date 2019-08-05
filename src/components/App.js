import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Landing from './Landing';
import Home from './Home';
import Callback from '../containers/auth/Callback';
import { withSession } from '../containers/auth/withSession';
import TaskById from '../containers/tasks/TaskById';

// only withSession() routes require login
export default function App() {
  return (
    <Router>
      {/* <Link to="/">Sign In/Sign Up</Link> */}
      <Switch>
        <Route exact path="/" component={withSession(Home)} />
        <Route path="/callback" component={Callback} />
        <Route path="/:id" component={withSession(TaskById)} />
      </Switch>
    </Router>
  );
}
