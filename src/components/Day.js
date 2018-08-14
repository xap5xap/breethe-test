import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { getBackground } from '../utils/Medias';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${p => p.image});
  height: 100%;
  background-size: cover;
  background-position: 0;
  position: absolute;
  width: 100%;
  padding: 10px;
`;

const Description = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  line-height: 1.5em;
  font-size: 0.9em;
  border: 1px solid white;
  box-shadow: 0px 0px 1px 1px;
  width: 20%;
  margin-right: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const MediaContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Audio = styled.audio`
  margin-bottom: 20px;
`;

class Day extends React.Component {
  renderMedia(node) {
    return node.content_medias.filter(el => el.use_for.startsWith('audio-')).map((entry, index) => {
      const content = this.props.catalog.medias.find(element => element.id === entry.media_id);
      return (
        <Audio key={index} controls>
          <source src={content.url} type={content.content_type} />
          Your browser does not support the audio element.
        </Audio>
      );
    });
  }

  render() {
    const node = this.props.catalog.contents.find(
      node => node.id === Number.parseInt(this.props.match.params.dayId, 10)
    );
    return (
      <Container image={getBackground(node.content_medias, this.props.catalog.medias)}>
        <h2>{node.title}</h2>
        <ContentContainer>
          <Description>{node.description}</Description>
          <MediaContainer>{this.renderMedia(node)}</MediaContainer>
        </ContentContainer>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    catalog: state.catalog
  };
}
export default withRouter(connect(mapStateToProps)(Day));
