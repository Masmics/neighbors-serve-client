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
        <TaskDetail owned={owned} task={task} />
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
