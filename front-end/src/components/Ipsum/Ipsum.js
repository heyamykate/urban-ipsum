import React from 'react';
import { connect } from 'react-redux';
import Container from '../../components/Container/Container';

function Ipsum (props) {
    console.log("ipsum props: ", props);
    let ipsum = props.ipsum.map((obj, index) => {
      return <p key={ index }>{ obj.text }</p>
    })
    return (
      <Container>
        <div className="ipsum">
          { ipsum }
        </div>
      </Container>
    );
}

function mapStateToProps(state) {
  return {
    ipsum: state.ipsum
  }
}


export default connect(mapStateToProps)(Ipsum);