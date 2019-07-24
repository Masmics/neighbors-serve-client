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
    title: '',
    // date: '',
    contactName: '',
    description: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, contactName, description } = this.state; // date,
    // this.date = new Date();
    this.props.createTask({ title, contactName, description }); // date,
    // clears form after submission
    this.setState({ title: '', contactName: '', description: '' }); // date: '',
  }

  // set the name to this value
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  
  render() {
    const { title, contactName, description } = this.state;
    return (
      <>
        <h4>Add a Task:</h4>
        <TaskForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          title={title}
          contactName={contactName}
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
