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

  handleSubmit = () => { //event => {
    // event.preventDefault();
    const { task } = this.state;
    this.props.removeTask({ task });
    this.setState({ task: '' });
    // return (<Redirect to={'/'} />);
    // <Redirect to={'/'} />;

    // if(task === ''){
    //   return (
    //     <Redirect to={'/'} />
    //   );
    // }
  };

  handleClick = () => {
    return (
      <Redirect to={'/'} />
    );
  }

  render() {
    const { task } = this.state;  
    return (  
      <>                       
        <p></p>
        <div>
          <h4>Owner: Delete This Task?</h4>
          <TaskDeleter
            onSubmit={this.handleSubmit}
            onClick={this.handleClick} // <-- this redirect does not work
            task={task} 
            submitText="Delete Task"
          />
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
