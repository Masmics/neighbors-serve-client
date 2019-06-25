import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../services/auth';
import { getToken } from '../../selectors/sessionSelector';

// take a component, only render if user logged in
export const withSession = Component => {
  class WithSession extends PureComponent {
    static propTypes = {
      token: PropTypes.string.isRequired
    }
    // on mount, call login function if not logged in (has token = logged in)
    componentDidMount() {
      if(!this.props.token) {
        login();
      }
    }
    render() {
      // only render if logged in, else just error message
      if(!this.props.token) return <h1>Please login/signup</h1>;
      return <Component />;
    }
  }

  const mapStateToProps = state => ({
    token: getToken(state)
  });
  
  return connect(
    mapStateToProps
  )(WithSession);
};
