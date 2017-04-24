import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../redux/actions';
import getIpsum from '../../logic';

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
        this.props.dispatch(actionCreators.requestIpsum(count))
        getIpsum(count).then((result) => {
          this.props.dispatch(actionCreators.receiveIpsum(count, result));
        })
    }
    render () {
      return (
        <div className="form-container">
          <Form handleSubmit={ this.handleSubmit }
          getRef={ this.getRef } />
          </div>
      )
    }
}

//export default FormContainer;
function mapStateToProps(state) {
  return {
    isFetching: state.isFetching,
    count: state.count,
    ipsum: state.ipsum
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
