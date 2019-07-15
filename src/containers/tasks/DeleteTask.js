import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';
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
    task: ''
    // title: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    const { task } = this.state.task;
    // const { title } = this.state.title;
    this.props.removeTask({ task });
    // this.props.removeTask({ title });
    this.setState({ task: '' });
    // this.setState({ title });
    // <Redirect to={'/'} />;
  }

  render() {
    const { task } = this.state.task;
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
  }    //(task, (_id: match.params.id)));            
});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(DeleteTask));
