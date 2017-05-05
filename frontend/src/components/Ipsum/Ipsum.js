import React, { Component } from 'react';
import Container from '../../components/Container/Container';
import { getIpsum } from '../../logic';
import { Link } from 'react-router-dom';
import { TweenMax } from 'gsap';

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
      this.setState({ ipsum: result });
      TweenMax.to('.ipsum .btn', 0.4, { opacity: 1 })
      setTimeout(() => {
        TweenMax.to('.ipsum p', 0.4, { y: 0, opacity: 1 });
      }, 600)
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
          <Link to="/" className="btn">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
            Get Freshies</Link>
          { ipsum }
        </div>
      </Container>
    );
  }
}

export default Ipsum;
