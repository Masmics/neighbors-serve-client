import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { 
  withRouter } from 'react-router-dom';
import { delTask } from '../../actions/taskActions';
import TaskDeleter from '../../components/tasks/TaskDeleter';

class DeleteTask extends PureComponent {
  static propTypes = {
    // task: PropTypes.object.isRequired,
    task: PropTypes.object,
    // title: PropTypes.string.isRequired,
    removeTask: PropTypes.func.isRequired
  }

  state = {
    task: '' //{}
    // title: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    const { task } = this.state;//.task;
    this.props.removeTask({ task });
    this.setState({ task: '' });

    // await(this.setState({ task: '' }))
    return (
      <Redirect to={'/'} />
    ); // doesn't work

    //if(!task === ''){
    // return (
    //   <Redirect to={'/'} />
    // );
  };

  render() {
    const { task } = this.state;  
    return (                         
    <>
      <h3>Delete Task {task}?</h3>
      <TaskDeleter
        onSubmit={this.handleSubmit}
        task={task} 
        submitText="Delete Task"
      />
    </>
    );
  }
}

const mapDispatchToProps = (dispatch, { match }) => ({
  removeTask() {
    dispatch(delTask(match.params.id));
  }          
});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(DeleteTask));
