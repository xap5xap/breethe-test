/* eslint-disable import/no-named-as-default */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  
  render() {
    console.log('App.js - this.props', this.props);
    const IS_LOADING = this.props.apiStatus.fetching;
    return (
      <div className="App">
        {IS_LOADING && <div>Loading</div>}

        {!IS_LOADING && (
          <div>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>{' '}
          </div>
        )}
      </div>
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
  };
}
// export default (App);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
