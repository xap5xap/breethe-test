import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withRouter, Redirect } from 'react-router-dom';
import * as authActions from '../actions/authActions';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-top: 1.5em;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 2.5rem 1rem;
  border: 2px solid white;
  background: white;
  color: black;
`;

const Input = styled.input`
  margin-bottom: 1.5em;
  margin-top: 0.8em;
  height: 30px;
`;

class Login extends React.Component {
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const redirectToReferrer = this.props.auth.token.length > 0;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <Container>
        <h2>Welcome to Breethe</h2>
        <p>Please login. Use whatever email and password. Doesn't matter :)</p>
        <FormContainer>
          <div>Email:</div>
          <Input type="text" />
          <div>Password:</div>
          <Input type="password" />
        </FormContainer>
        <Button onClick={this.onLogin.bind(this)}>Login</Button>
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
