import React, { Component } from 'react';
import Container from '../../components/Container/Container';
import { getIpsum } from '../../logic';

class Ipsum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ipsum: ''
    }
  }
  componentDidMount() {
    let num = parseInt(this.props.match.params.num, 10);
    getIpsum(num).then((result) => {
      this.setState({ ipsum: result })
    });
  }
  render() {
    var result = Object.keys(this.state.ipsum).map((e) => {
      return this.state.ipsum[e];
    })
    let ipsum = result.map((obj, index) => {
      return <p key={ index }>{ obj.text }</p>;
    });
    return (
      <Container containerClass="fixed-offset">
        <div className="ipsum">
          { ipsum }
        </div>
      </Container>
    );
  }
}

export default Ipsum;
