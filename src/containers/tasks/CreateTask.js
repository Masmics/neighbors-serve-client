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
    description: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, description } = this.state;
    this.props.createTask({ title, description });
    // clears form after submission
    this.setState({ title: '', description: '' });
  }

  // set the name to this value
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  
  render() {
    const { title, description } = this.state;
    return (
      <>
        <h4>Add a Task:</h4>
        <TaskForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          title={title}
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
