import React, { Component } from 'react';

import FormContainer from './components/Container/FormContainer';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Ipsum from './components/Ipsum/Ipsum';
import sloth from './assets/img/spacesloth.jpg';
import getIpsum from './logic';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      ipsum: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getRef = this.getRef.bind(this);
    this.setState = this.setState.bind(this);
  }
  getRef(ref){
    this.setState({ count: ref });
  }
  handleSubmit() {
    let count = this.state.count.value;
    getIpsum(count).then( (result) => {
      this.setState({
        ipsum: result,
        count: 0
      })
    })
  }
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
              <span>It might be NSFW. Depends on the workplace.</span>
            </div>
            <img src={ sloth } alt="Space Sloth" />
          </div>
          <FormContainer
            handleSubmit={ this.handleSubmit }
            getRef={ this.getRef }
           />
        </Container>
        <Container>
          <Ipsum ipsum={ this.state.ipsum } />
        </Container>
      </div>
    );
  }
}

export default App;
