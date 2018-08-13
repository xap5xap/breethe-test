import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withRouter, Redirect } from 'react-router-dom';
import * as authActions from '../actions/authActions';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

class Login extends React.Component {
  render() {
    console.log('Login.js - this.props', this.props);

    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const redirectToReferrer = this.props.auth.token.length > 0;

    console.log('Login.js - from', from);

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <Container>
        <div onClick={this.onLogin.bind(this)}>Holaa</div>
      </Container>
    );
  }

  onLogin() {
    this.props.authActions.login('xap@a.com', 'pax');
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}
function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  };
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
