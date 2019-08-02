import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TaskForm from '../../components/tasks/TaskForm';
import { newTask } from '../../actions/taskActions';

class CreateTask extends PureComponent {
  static propTypes = {
    createTask: PropTypes.func.isRequired
  }
  state = {
    // date: '',
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
    const { title, taskType, location, streetAddr, contactName, contactPhone, contactEmail, description } = this.state; // date,
    // this.date = new Date();
    this.props.createTask({ title, taskType, location, streetAddr, contactName, contactPhone, contactEmail, description }); // date,
    // clears form after submission
    this.setState({ title: '', taskType: '', location: '', streetAddr: '', contactName: '', contactPhone: '', contactEmail: '', description: '' }); // date: '',
  }

  // set the name to this value
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  
  render() {
    const { title, taskType, location, streetAddr, contactName, contactPhone, contactEmail, description } = this.state;
    return (
      <>
        <h4>Add a Task:</h4>
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
