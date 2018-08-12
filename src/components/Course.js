import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import MeditateCard from './MeditateCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

class Course extends React.Component {
  renderMeditationWeeks(node) {
    return node.entries.sort((a, b) => a.position - b.position).map((entry, index) => {
      const content = this.props.catalog.contents.find(element => element.id === entry.content_id);
      return <MeditateCard key={index} content={content} medias={this.props.catalog.medias} />;
    });
  }

  render() {
    console.log('Course.js - this.state', this.state);
    console.log('Course.js - this.props', this.props);
    const node = this.props.catalog.contents.find(node => node.discriminator_type === 'Course');

    return (
      <Container>
        <h2>{node.title}</h2>
        <CardContainer>{this.renderMeditationWeeks(node)}</CardContainer>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    catalog: state.catalog
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}
// export default (App);
export default connect(mapStateToProps)(Course);
