import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TaskDetail from '../../components/tasks/TaskDetail';
import { fetchTaskDetail } from '../../actions/taskDetailActions';
import { getTaskDetail, getTaskDetailLoading, getTaskDetailOwnedBySession } from '../../selectors/taskDetailSelector';
import { getSessionId } from '../../selectors/sessionSelector';

// create wrapper
class TaskById extends PureComponent {
  static propTypes = {
    task: PropTypes.shape({
      date: PropTypes.string,
      title: PropTypes.string,
      taskType: PropTypes.arrayOf(PropTypes.shape({ // was shape({
        Labor: PropTypes.string, //.bool,
        Trades: PropTypes.string, //.bool,
        Clerical: PropTypes.string, //.bool,
        Technical: PropTypes.string, //.bool,
        Teaching: PropTypes.string, //.bool,
        Caregiving: PropTypes.string, //.bool,
        Event: PropTypes.string, //.bool
      })).isRequired,
      location: PropTypes.arrayOf(PropTypes.shape({ // was shape({
        Beaverton: PropTypes.string, //.bool,
        Clackamas: PropTypes.string, //.bool,
        Gresham: PropTypes.string, //.bool,
        HappyValley: PropTypes.string, //.bool,
        LakeOswego: PropTypes.string, //.bool,
        Milwaukie: PropTypes.string, //.bool,
        Downtown: PropTypes.string, //.bool,
        North: PropTypes.string, //.bool,
        NECloseIn: PropTypes.string, //.bool,
        NorthEast: PropTypes.string, //.bool,
        NorthWest: PropTypes.string, //.bool,
        SECloseIn: PropTypes.string, //.bool,
        SouthEast: PropTypes.string, //.bool,
        SouthWest: PropTypes.string, //.bool,
        Sandy: PropTypes.string, //.bool,
        Troutdale: PropTypes.string, //.bool,
        Tualatin: PropTypes.string, //.bool,
        Vancouver: PropTypes.string, //.bool,
      })).isRequired,
      streetAddr: PropTypes.string,
      contactName: PropTypes.string,
      contactPhone: PropTypes.string,
      contactEmail: PropTypes.string,
      description: PropTypes.string,
      author: PropTypes.shape({
        email: PropTypes.string,
        name: PropTypes.string
      })
    }),
    owned: PropTypes.bool.isRequired,
    fetch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired 
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { loading, task, owned } = this.props;
    if(loading) return <h2>Loading...</h2>;
    return (
      <>
        <div></div>
        <div>
          <TaskDetail owned={owned} task={task} />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  owned: getTaskDetailOwnedBySession(state),
  task: getTaskDetail(state),
  loading: getTaskDetailLoading(state)
});

const mapDispatchToProps = (dispatch, { match }) => ({
  fetch() {
    dispatch(fetchTaskDetail(match.params.id));
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskById));
