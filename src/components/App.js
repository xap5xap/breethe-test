/* eslint-disable import/no-named-as-default */
import PropTypes from "prop-types";
import React from "react";
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
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

export default (App);
