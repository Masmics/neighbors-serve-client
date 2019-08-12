import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import TaskForm from '../../components/tasks/TaskForm';
import { newTask } from '../../actions/taskActions';

class CreateTask extends PureComponent {
  static propTypes = {
    createTask: PropTypes.func.isRequired
  }
  
  state = {
    title: '',
    taskType: '',
    location: '',
    streetAddr: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    description: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, taskType, location, streetAddr, contactName, contactPhone, contactEmail, description } = this.state;
    this.props.createTask({ title, taskType, location, streetAddr, contactName, contactPhone, contactEmail, description });
    // clears form after submission
    this.setState({ title: '', taskType: '', location: '', streetAddr: '', contactName: '', contactPhone: '', contactEmail: '', description: '' });
    return (
      <>
        <Redirect to={'/home'} />
      </>
    );
  }

  // handleClick = () => {
  //   return (
  //     <>
  //       <Redirect to={'/home'} />
  //     </>
  //   );
  // }

  // set the name to this value
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  
  render() {
    const { title, taskType, location, streetAddr, contactName, contactPhone, contactEmail, description } = this.state;
    return (
      <>
        <TaskForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          title={title}
          taskType={taskType}
          location={location}
          contactName={contactName}
          contactPhone={contactPhone}
          contactEmail={contactEmail}
          streetAddr={streetAddr}
          description={description}
          submitText="Create Task"
          legend="Create a new request or notice"
        />
      </>
    );
  }
}

// it will need props, so map, will be an action, so dispatch
const mapDispatchToProps = dispatch => ({
  createTask(task) {
    dispatch(newTask(task));
  }
});

// /// not mapping state to this, so null
// /// container wraps the form and controls it
export default connect(
  null,
  mapDispatchToProps
)(CreateTask);
