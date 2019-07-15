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

  // componentDidMount() { // makes delete not work
  //   this.props;
  // }

  handleSubmit = event => {
    event.preventDefault();
    const { task } = this.state.task; // WAS this.props (no chg, wks)
    this.props.removeTask({ task });
    this.setState({ task: '' }); 
  }

  render() {
    const { task } = this.state.task; // w/o .tasks, no chg
    return (                         // as long as 25 is this.state
      <>
      <h3>Delete Task {task}?</h3>
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
