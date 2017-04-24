import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestIpsum, receiveIpsum } from '../../redux/actions';
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
        this.props.dispatch(requestIpsum(count))
        getIpsum(count).then((result) => {
          this.props.dispatch(receiveIpsum(count, result));
            this.setState({
                ipsum: result,
                count: 0
            })
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

export default connect(mapStateToProps)(FormContainer);
