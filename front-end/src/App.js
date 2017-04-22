import React, { Component } from 'react';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Ipsum from './components/Ipsum/Ipsum';
import sloth from './assets/img/spacesloth.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <div className="top">
            <div className="text">
              <p>I know, I know. Another ipsum generator. But hear me out, this one is special.</p>
              <p>Instead of barfing out useless words, this generator pulls its content from Urban Dictionary. That means that not only will you laugh your ass off, but you'll also learn the phrases all the youths are using these days.</p>
              <p>Educate yourself.</p>
            </div>
            <img src={ sloth } alt="Space Sloth" />
          </div>
          <Form />
        </Container>
        <Container>
          <Ipsum />
        </Container>
      </div>
    );
  }
}

export default App;
