import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TaskForm from '../../components/tasks/TaskForm';
import { updateTaskDetail } from '../../actions/taskDetailActions';
import { getTaskDetailTitle, getTaskDetailTaskType, getTaskDetailContactName, getTaskDetailLocation, getTaskDetailStreetAddr, getTaskDetailDate, getTaskDetailContactPhone, getTaskDetailContactEmail, getTaskDetailDescription } from '../../selectors/taskDetailSelector';

class EditTask extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    // date: PropTypes.string,
    taskType: PropTypes.arrayOf(PropTypes.shape({ // was shape({
      labor: PropTypes.bool,
      trades: PropTypes.bool,
      clerical: PropTypes.bool,
      technical: PropTypes.bool,
      tutoring: PropTypes.bool,
      personCare: PropTypes.bool,
      event: PropTypes.bool
    })).isRequired,
    location: PropTypes.arrayOf(PropTypes.shape({ // was shape({
      beaverton: PropTypes.bool,
      clackamas: PropTypes.bool,
      gresham: PropTypes.bool,
      happyValley: PropTypes.bool,
      lakeOswego: PropTypes.bool,
      milwaukie: PropTypes.bool,
      portland: PropTypes.arrayOf(PropTypes.shape({
        downtown: PropTypes.bool,
        north: PropTypes.bool,
        northEastClose: PropTypes.bool,
        northEast: PropTypes.bool,
        northWest: PropTypes.bool,
        southEastClose: PropTypes.bool,
        southEast: PropTypes.bool,
        southWest: PropTypes.bool
      })),
      sandy: PropTypes.bool,
      troutdale: PropTypes.bool,
      tualatin: PropTypes.bool,
      vancouver: PropTypes.bool,
    })).isRequired,
    streetAddr: PropTypes.string.isRequired,
    contactName: PropTypes.string.isRequired,
    contactPhone: PropTypes.string.isRequired,
    contactEmail: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    editTask: PropTypes.func.isRequired
  }

  state = {
    date: '',
    title: '',
    taskType: '',
    location: '',
    streetAddr: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    description: ''
  }

  componentDidMount() {
    this.setState({ title: this.props.title, taskType: this.props.taskType, contactName: this.props.contactName, contactPhone: this.props.contactPhone, contactEmail: this.props.contactEmail, location: this.props.location, streetAddr: this.props.streetAddr, description: this.props.description });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, taskType, location, streetAddr, contactName, contactPhone, contactEmail, description } = this.state;
    this.props.editTask({ title, taskType, location, streetAddr, contactName, contactPhone, contactEmail, description });
    this.setState({ title: '', taskType: '', location: '', streetAddr: '', contactName: '', contactPhone: '', contactEmail: '', description: '' });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { title, taskType, location, streetAddr, contactName, contactPhone, contactEmail, description } = this.state;
    return (
      <>
      <p></p>
      <TaskForm
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        title={title}
        taskType={taskType}
        location={location}
        contactName={contactName}
        contactPhone={contactPhone}
        contactEmail={contactEmail}
        streetAddr={streetAddr}
        description={description}
        submitText="Edit Task"
      />
      </>
    );
  }
}

const mapStateToProps = state => ({
  title: getTaskDetailTitle(state),
  taskType: getTaskDetailTaskType(state),
  location: getTaskDetailLocation(state),
  contactName: getTaskDetailContactName(state),
  contactPhone: getTaskDetailContactPhone(state),
  contactEmail: getTaskDetailContactEmail(state),
  date: getTaskDetailDate(state),
  streetAddr: getTaskDetailStreetAddr(state),
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


