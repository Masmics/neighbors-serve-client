import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTasks, getTasksLoading } from '../../selectors/tasksSelector';
import { fetchTasks } from '../../actions/taskActions';
import Tasks from '../../components/tasks/Tasks';

class AllTasks extends PureComponent {
  static propTypes = {
    tasks: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    // when mounts, call fetch to fetch from Api and populate tasks
    this.props.fetch();
  }

  render() {
    // get loading, tasks from this.props
    const { loading, tasks } = this.props;
    if(loading) return <h2>Loading...</h2>;
    return <Tasks tasks={tasks} />;
  }
}

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchTasks());
  }
});

const mapStateToProps = state => ({
  tasks: getTasks(state),
  loading: getTasksLoading(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllTasks);
