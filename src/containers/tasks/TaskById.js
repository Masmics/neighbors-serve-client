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
      title: PropTypes.string,
      description: PropTypes.string,
      author: PropTypes.shape({
        email: PropTypes.string
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
    return <TaskDetail owned={owned} task={task} />;
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
