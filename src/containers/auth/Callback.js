import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSession } from '../../actions/sessionActions';

class Callback extends PureComponent {
  static propTypes = {
    handleAuth: PropTypes.func.isRequired
  }
  componentDidMount() {
    // in auth - parses url and returns a token
    this.props.handleAuth();
  }
  
  render() {
    return <h4></h4>;
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  handleAuth() {
    const action = setSession();
    dispatch(action);
    // wait for action to finish - action.payload is always a promise
    action.payload.then(() => {
      // react-router enables return to previous page (history)
      props.history.push('/');
    });
  }
});

// export a connected component
export default connect(
  null,
  mapDispatchToProps
)(Callback);
