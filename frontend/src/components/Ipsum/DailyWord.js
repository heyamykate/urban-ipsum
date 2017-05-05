import React, { Component } from 'react';
import { getDailyWord } from '../../logic';

class DailyWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyWord: ''
    }
  }
  componentDidMount() {
    getDailyWord().then((result) => {
      console.log('dailyword: ', result);
    });
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
