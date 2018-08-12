import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './images/logo.svg';

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99999;
`;

const logoSpin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  `;

const Logo = styled.img`
  position: fixed;
  top: calc(50% - 40px);
  left: calc(50% - 30px);
  height: 80px;
  animation: ${logoSpin} infinite 2s linear;
`;

const Text = styled.div`
  font-size: 2em;
  position: fixed;
  top: calc(50% + 40px);
  left: calc(50% - 40px);
`;


const Loading = props => {
    return (
        <Container>
            <Logo src={logo} />
            <Text>Loading...</Text>
        </Container>
    );
};
export default Loading;
