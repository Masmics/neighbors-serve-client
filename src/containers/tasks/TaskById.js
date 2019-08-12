import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TaskDetail from '../../components/tasks/TaskDetail';
import { fetchTaskDetail } from '../../actions/taskDetailActions';
import { getTaskDetail, getTaskDetailLoading, getTaskDetailOwnedBySession } from '../../selectors/taskDetailSelector';

class TaskById extends PureComponent {
  static propTypes = {
    task: PropTypes.shape({
      date: PropTypes.string,
      title: PropTypes.string,
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
