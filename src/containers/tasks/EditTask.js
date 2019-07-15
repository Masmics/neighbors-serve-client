import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; // , Link
import TaskForm from '../../components/tasks/TaskForm';
import { updateTaskDetail } from '../../actions/taskDetailActions';
import { getTaskDetailTitle, getTaskDetailDescription } from '../../selectors/taskDetailSelector';

class EditTask extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    editTask: PropTypes.func.isRequired
  }

  state = {
    title: '',
    description: ''
  }

  componentDidMount() {
    this.setState({ title: this.props.title, description: this.props.description }); //, author: this.props.author.email });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, description } = this.state;
    this.props.editTask({ title, description });
    this.setState({ title: '', description: '' });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { title, description } = this.state;//, author } = this.state;
    return (
      <>
      
      <p></p>
      <TaskForm
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        title={title}
        description={description}
        submitText="Edit Task"
      />
      </>
    );
  }
}

const mapStateToProps = state => ({
  title: getTaskDetailTitle(state),
  description: getTaskDetailDescription(state)
});

const mapDispatchToProps = (dispatch, { match }) => ({
  editTask(task) {
    dispatch(updateTaskDetail({ ...task, _id: match.params.id }));
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTask));


