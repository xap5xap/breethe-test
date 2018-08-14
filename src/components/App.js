/* eslint-disable import/no-named-as-default */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import styled from 'styled-components';
import { Route, withRouter, Redirect } from 'react-router-dom';
import Course from './Course';
import Loading from './Loading';
import Login from './Login';
import Meditation from './Meditation';
import Day from './Day';
import * as catalogActions from '../actions/catalogActions';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
`;

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        );
      }}
    />
  );
};

class App extends React.Component {
  render() {
    const isAuthenticated = this.props.auth.token.length > 0;
    const IS_LOADING = this.props.apiStatus.fetching;
    return (
      <Container>
        {IS_LOADING && <Loading />}

        {!IS_LOADING && (
          <div>
            <Route exact path="/" component={Course} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute
              path="/meditation/:meditationId"
              component={Meditation}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute path="/day/:dayId" component={Day} isAuthenticated={isAuthenticated} />
          </div>
        )}
      </Container>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};
function mapStateToProps(state) {
  return {
    catalog: state.catalog,
    apiStatus: state.apiStatus,
    auth: state.auth
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(catalogActions, dispatch)
  };
}
// export default (App);
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
