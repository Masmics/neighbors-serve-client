import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';
import { delTask } from '../../actions/taskActions';
import TaskDeleter from '../../components/tasks/TaskDeleter';

class DeleteTask extends PureComponent {
  static propTypes = {
    task: PropTypes.object,
    removeTask: PropTypes.func.isRequired
  }

  state = {
    task: ''
  }

  handleSubmit = () => {
    // event.preventDefault();
    const { task } = this.state;
    this.props.removeTask({ task });
    this.setState({ task: '' });
  };

  handleClick = () => {
    return (
      <>
        <h2>Task Successfully Deleted</h2>
        <Redirect to={'/home'} />
      </>
    );
  }

  render() {
    const { task } = this.state;  
    return (  
      <>                       
        <div>
          <TaskDeleter
            onSubmit={this.handleSubmit}
            onClick={this.handleClick}
            task={task} />
        </div>
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
