import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Card from './Card';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const DayContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

class Meditation extends React.Component {
  renderMeditationDays(node) {
    return node.entries.sort((a, b) => a.position - b.position).map((entry, index) => {
      const content = this.props.catalog.contents.find(element => element.id === entry.content_id);
      return <Card key={index} linkTo="day" content={content} medias={this.props.catalog.medias} />;
    });
  }

  render() {
    console.log('Meditation.js - this.props', this.props);
    console.log(
      'Meditation.js - this.props.match.params.meditationId',
      this.props.match.params.meditationId
    );
    const node = this.props.catalog.contents.find(
      node => node.id === Number.parseInt(this.props.match.params.meditationId, 10)
    );
    console.log('Meditation.js - node', node);

    return (
      <Container>
        <h2>{node.title}</h2>
        <DayContainer>{this.renderMeditationDays(node)}</DayContainer>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    catalog: state.catalog
  };
}
export default withRouter(connect(mapStateToProps)(Meditation));
