import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

class Course extends React.Component {
  render() {
    return <p>chao</p>;
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
