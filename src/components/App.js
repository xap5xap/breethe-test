/* eslint-disable import/no-named-as-default */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import styled from 'styled-components';
import { Route, withRouter } from 'react-router-dom';
import Course from './Course';
import Loading from './Loading';
import Meditation from './Meditation';
import * as catalogActions from '../actions/catalogActions';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
`;

class App extends React.Component {
  
  render() {
    console.log('App.js - this.props', this.props);
    const IS_LOADING = this.props.apiStatus.fetching;
    return (
      <Container>
        {IS_LOADING && <Loading />}

        {!IS_LOADING && (
          <div>
            <Route exact path="/" component={Course} />
            <Route path="/meditation/:meditationId" component={Meditation} />
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
    apiStatus: state.apiStatus
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(catalogActions, dispatch)
  };
}
// export default (App);
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
