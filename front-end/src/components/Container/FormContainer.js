import React, { Component } from 'react';
import { getIpsum } from '../../logic';
import { BrowserRouter as Router } from 'react-router-dom';
import Form from '../../components/Form/Form';
import history from '../../history';
import PropTypes from 'prop-types';

class FormContainer extends Component {
    constructor(props, context) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.getRef = this.getRef.bind(this);
    }
    getRef(ref) {
        this.setState({ count: ref });
    }
    handleSubmit() {
        let count = this.state.count.value;
        let path = `ipsum/${count}`;
        this.context.router.history.push(path);
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
FormContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default FormContainer;
