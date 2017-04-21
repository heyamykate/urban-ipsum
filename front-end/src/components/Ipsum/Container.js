import React, { Component } from 'react';
import Ipsum from './Ipsum';

import './Ipsum.scss';

class Container extends Component {
  render() {
    return (
      <div className="ipsum-container">
        <Ipsum />
        <Ipsum />
      </div>
    );
  }
}
export default Container;