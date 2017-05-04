import React, { Component } from 'react';
import { TimelineMax } from 'gsap';

import FormContainer from '../../components/Container/FormContainer';
import Container from '../../components/Container/Container';

class MainContainer extends Component {
  componentDidMount() {
    let tl = new TimelineMax({ paused: true });
    tl.to('.top', 0.3, { opacity: 1, y: 0 })
    tl.to('.form-container', 0.3, { opacity: 1 })
    setTimeout(() => {
        tl.play();
    }, 800)
  }
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
