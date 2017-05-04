import React, { Component } from 'react';

import FormContainer from '../../components/Container/FormContainer';
import Container from '../../components/Container/Container';
//import DailyWord from '../../components/Ipsum/DailyWord';

class MainContainer extends Component {
  render() {
    return (
        <Container containerClass="fixed-offset">
          <div className="top">
            <p>Spice up your work and broaden your vocabulary by using Urban Ipsum - the ipsum generator that pulls its content from <a href="https://www.urbandictionary.com/" target="_blank">Urban Dictionary</a>.</p>
            <span>Somewhat NSFW. You have been warned.</span>
          </div>
          <FormContainer />
        </Container>
    );
  }
}

export default MainContainer;
