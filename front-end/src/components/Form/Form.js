import React, { Component } from 'react';

import getIpsum from '../../logic';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 2, ipsum: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getRef = this.getRef.bind(this);
  }
  getRef(ref){
    this.setState({ count: ref });
  }
  handleSubmit() {
    let count = this.state.count.value;
    getIpsum(count).then(function(result) {
      console.log('result: ', result)
      this.setState({
        ipsum: result
      })
    })
  }
  render() {
    return (
      <div className="form-wrapper">
        <form name="get-ipsum">
          <div className="form-sections">
            <div className="form-section">
              <div className="form-group lateral-group">
                <label>How many paragraphs do you want?</label>
                <input type="text" placeholder="# Here" ref={ this.getRef }/>
              </div>
              <div className="form-group">
                <div onClick={ this.handleSubmit } className="btn">Get my Sh!t</div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;