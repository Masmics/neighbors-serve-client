import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TaskForm from '../../components/tasks/TaskForm';
import { updateTaskDetail } from '../../actions/taskDetailActions';
import { getTaskDetailTitle, getTaskDetailContactName, getTaskDetailDescription } from '../../selectors/taskDetailSelector';

class EditTask extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    contactName: PropTypes.string.isRequired,
    // date: PropTypes.instanceOf(Date),
    description: PropTypes.string.isRequired,
    editTask: PropTypes.func.isRequired
  }

  state = {
    title: '',
    contactName: '',
    // date: '',
    description: ''
  }

  componentDidMount() {
    this.setState({ title: this.props.title, contactName: this.props.contactName, description: this.props.description });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, contactName, description } = this.state;
    this.props.editTask({ title, contactName, description });
    this.setState({ title: '', contactName: '', description: '' });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { title, contactName, description } = this.state;
    return (
      <>
      <p></p>
      <TaskForm
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        title={title}
        contactName={contactName}
        description={description}
        submitText="Edit Task"
      />
      </>
    );
  }
}

const mapStateToProps = state => ({
  title: getTaskDetailTitle(state),
  contactName: getTaskDetailContactName(state),
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


