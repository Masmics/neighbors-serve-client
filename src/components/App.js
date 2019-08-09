import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Landing from './Landing';
import Home from './Home';
import Callback from '../containers/auth/Callback';
import { withSession } from '../containers/auth/withSession';
import TaskById from '../containers/tasks/TaskById';
import CreateTask from '../containers/tasks/CreateTask';
import EditTask from '../containers/tasks/EditTask';
import Header from './Header';
import Footer from './Footer';
import '../css/styles.css';

// only withSession() routes require login
export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={withSession(Home)} />
        <Route exact path="/create" component={withSession(CreateTask)} />
        <Route path="/callback" component={Callback} />
        <Route path="/:id" component={withSession(TaskById)} />
        <Route path="/update" component={withSession(EditTask)} />
      </Switch>
      <Footer />
    </Router>
  );
}
