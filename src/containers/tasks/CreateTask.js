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
    this.setState({ title: '', taskType: '', location: '', streetAddr: '', contactName: '', contactPhone: '', contactEmail: '', description: '' });
  }

  handleClick = () => {
    return (
      <>
        <Redirect to={'/home'} />
      </>
    );
  }

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
          onClick={this.handleClick}
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

const mapDispatchToProps = (dispatch) => ({
  createTask(task) {
    dispatch(newTask(task));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CreateTask);
