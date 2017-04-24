import React, { Component } from 'react';
import { connect } from 'react-redux';

class Ipsum  extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      let ipsum = this.props.ipsum.map((obj, index) => {
        return <p key={ index }>{ obj.text }</p>
      })
      return (
        <div className="ipsum">
          { ipsum }
        </div>
        );
    }

}

function mapStateToProps(state) {
  return {
    ipsum: state.ipsum
  }
}


export default connect(mapStateToProps)(Ipsum);