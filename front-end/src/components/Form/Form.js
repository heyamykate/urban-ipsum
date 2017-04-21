import React, { Component } from 'react';
import '../../App.css';
import './Form.scss';

import Container from "../Ipsum/Container";

class Form extends Component {
  render() {
    return (
      <div className="form-wrapper">
        <form name="get-ipsum">
          <h2>Ipsum Form</h2>
          <div className="form-sections">
            <div className="form-section">
              <div className="form-group lateral-group">
                <label>How many paragraphs do you want?</label>
                <input type="text" placeholder="2" />
              </div>
              <div className="form-group">
                <input type="submit" value="Get My Sh!t" />
              </div>
            </div>
          </div>
          <div className="wrapper">
            <Container />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;