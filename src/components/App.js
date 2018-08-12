/* eslint-disable import/no-named-as-default */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import * as catalogActions from '../actions/catalogActions';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.actions.loadCatalogs();
  }
  render() {
    console.log('App.js - this.props', this.props);
    const activeStyle = { color: 'blue' };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};
function mapStateToProps(state) {
  return {
    catalog: state.catalog
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(catalogActions, dispatch)
  };
}
// export default (App);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
