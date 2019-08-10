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
    taskType: PropTypes.arrayOf(PropTypes.shape({
      Labor: PropTypes.string,
      Trades: PropTypes.string,
      Clerical: PropTypes.string,
      Technical: PropTypes.string,
      Teaching: PropTypes.string,
      Caregiving: PropTypes.string,
      Event: PropTypes.string,
    })).isRequired,
    location: PropTypes.arrayOf(PropTypes.shape({
      Beaverton: PropTypes.string,
      Clackamas: PropTypes.string,
      Gresham: PropTypes.string,
      HappyValley: PropTypes.string,
      LakeOswego: PropTypes.string,
      Milwaukie: PropTypes.string,
      Downtown: PropTypes.string,
      North: PropTypes.string,
      NECloseIn: PropTypes.string,
      NorthEast: PropTypes.string,
      NorthWest: PropTypes.string,
      SECloseIn: PropTypes.string,
      SouthEast: PropTypes.string,
      SouthWest: PropTypes.string,
      Sandy: PropTypes.string,
      Troutdale: PropTypes.string,
      Tualatin: PropTypes.string,
      Vancouver: PropTypes.string,
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
    this.setState({ title: this.props.title, taskType: this.props.taskType, contactName: this.props.contactName, 
      contactPhone: this.props.contactPhone, contactEmail: this.props.contactEmail, location: this.props.location, 
      streetAddr: this.props.streetAddr, description: this.props.description });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, taskType, location, streetAddr, contactName, contactPhone, contactEmail, description } = this.state;
    this.props.editTask({ title, taskType, location, streetAddr, contactName, contactPhone, contactEmail, description });
    this.setState({ title: '', taskType: '', location: '', streetAddr: '', contactName: '', contactPhone: '', contactEmail: '', 
      description: '' });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { title, taskType, location, streetAddr, contactName, contactPhone, contactEmail, description } = this.state;
    return (
      <>
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
          legend="Edit or Update Your Listing"
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
