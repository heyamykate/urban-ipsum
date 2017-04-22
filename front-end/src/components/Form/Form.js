import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="form-wrapper">
        <form name="get-ipsum">
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
        </form>
      </div>
    );
  }
}

export default Form;