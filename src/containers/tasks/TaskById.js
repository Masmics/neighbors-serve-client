import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TaskDetail from '../../components/tasks/TaskDetail';
import { fetchTaskDetail } from '../../actions/taskDetailActions';
import { getTaskDetail, getTaskDetailLoading } from '../../selectors/taskDetailSelector';

// create wrapper
class TaskById extends PureComponent {
  static propTypes = {
    task: PropTypes.shape({
      // id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string
    }),
    fetch: PropTypes.func.isRequired,
    // loading: PropTypes.bool
    loading: PropTypes.bool.isRequired 
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { loading, task } = this.props;
    if(loading) return <h2>Loading...</h2>;
    return <TaskDetail task={task} />;
  }

  // render() {
  //   const { task } = this.props;
  //   if(loading) return <h2>Loading...</h2>;
  //   return <TaskDetail task={task} />;
  // }
}

const mapStateToProps = state => ({
  task: getTaskDetail(state),
  loading: getTaskDetailLoading(state)
});

const mapDispatchToProps = (dispatch, { match }) => ({
  fetch() {
    dispatch(fetchTaskDetail(match.params.id));
    // dispatch(fetchTaskDetail({ ...task, _id: match.params.id }));
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskById));

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TaskById);
