import React, { Component } from 'react';
import { TweenMax } from 'gsap';

class Header extends Component {
  componentDidMount() {
    setTimeout(() => {
      TweenMax.to('.hero h1', 0.4, { opacity: 1, y: 0 });
      TweenMax.to('.hero p', 0.25, { opacity: 1, scale: 1, delay: 0.4 });
    }, 600)
  }
  render() {
    return (
      <div className="hero">
        <h1>Ipsum is boring.</h1>
        <p>I'm here to help.</p>
      </div>
    );
  }
}
export default Header;
