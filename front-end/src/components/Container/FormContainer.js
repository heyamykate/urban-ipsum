import React, { Component } from 'react';
import { getIpsum } from '../../logic';

import Form from '../../components/Form/Form';

class FormContainer extends Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.getRef = this.getRef.bind(this);
    }
    getRef(ref) {
        this.setState({ count: ref });
    }
    handleSubmit() {
        let count = this.state.count.value;
        getIpsum(count).then((result) => {
          console.log('ipsum: ', result)
        })
    }
    render () {
      return (
        <div className="form-container">
          <Form
            handleSubmit={ this.handleSubmit }
            getRef={ this.getRef } />
          </div>
      )
    }
}

export default FormContainer;
