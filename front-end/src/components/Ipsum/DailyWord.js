import React, { Component } from 'react';
import { getDailyWord } from '../../logic';

class DailyWord extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="daily-word">
        <h1></h1>
      </div>
    );
  }
}

export default DailyWord;
