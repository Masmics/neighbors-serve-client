import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { delTask } from '../../actions/taskActions';
import TaskDeleter from '../../components/tasks/TaskDeleter';

// create wrapper
class DeleteTask extends PureComponent {
  static propTypes = {
    task: PropTypes.object.isRequired,
    removeTask: PropTypes.func.isRequired
  }

  state = {
    task: ''
  }

  // componentDidMount() {
  //   this.props;
  // }

  handleSubmit = event => {
    event.preventDefault();
    const { task } = this.state;
    this.props.removeTask({ task });
    this.setState({ task: '' }); 
  }

  render() {
    const { task } = this.props; // w/o .tasks, loads
    return (
      <>
      <p3>Delete Task {task}?</p3>
      <TaskDeleter
        onSubmit={this.handleSubmit}
        submitText="Delete Task"
      />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch, { match }) => ({
  removeTask(task) {
    dispatch(delTask(match.params.id, task));
  }
});

export default withRouter(connect(
  // mapStateToProps,
  mapDispatchToProps
)(DeleteTask));
