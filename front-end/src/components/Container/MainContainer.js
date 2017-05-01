import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormContainer from '../../components/Container/FormContainer';
import Container from '../../components/Container/Container';

class MainContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
        <Container containerClass="fixed-offset">
          <div className="top">
            <p>Spice up your work and broaden your vocabulary by using Urban Ipsum - the ipsum generator that pulls its content from <a href="https://www.urbandictionary.com/" target="_blank">Urban Dictionary</a>.</p>
          </div>
          <FormContainer />
        </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.isFetching,
    count: state.count,
    ipsum: state.ipsum
  }
}

export default connect(mapStateToProps)(MainContainer);
