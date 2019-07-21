import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
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
    task: '' //{}
  }

  handleSubmit = event => {
    event.preventDefault();
    const { task } = this.state;//.task;
    this.props.removeTask({ task });
    this.setState({ task: '' });
    <Redirect to={'/'} />;

    // if(task === ''){
    // return (
    //   <Redirect to={'/'} />
    // );
    // }
  };

  render() {
    const { task } = this.state;  

    return (  
      <>                       
        <p></p>
        <div>
          <h4>Owner: Delete This Task?</h4>
          <TaskDeleter
            onSubmit={this.handleSubmit}
            task={task} 
            submitText="Delete Task"
          />
        </div>
      </>
      // <>
      //   <>
      //     <Redirect to={'/'} />
      //   </>
      // </>
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
