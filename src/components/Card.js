import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getThumbnail } from '../utils/Medias';

const Container = styled.div`
  border: 1px solid white;
  width: 20%;
  border-radius: 5px;
  background-color: white;
  margin-right: 15px;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
    border: 2px solid white;
  }
`;

const Title = styled.div`
  font-size: 1.1em;
  padding: 5px;
`;

const Background = styled.div`
  height: 200px;
  background-image: url(${p => p.image});
  border-radius: 5px 5px 0 0;
  background-color: black;
  background-size: cover;
`;

const Description = styled.div`
  font-size: 0.8em;
  color: rgba(0, 0, 0, 0.5);
  padding: 5px;
`;

const Card = props => {
  const { content, medias, linkTo } = props;
  return (
    <Container>
      <Link to={`/${linkTo}/${content.id}`} style={{ textDecoration: 'none', color: 'white' }}>
        <Background image={getThumbnail(content.content_medias, medias)}>
          <Title>{content.title}</Title>
        </Background>
        <Description>{content.description}</Description>
      </Link>
    </Container>
  );
};
export default Card;
