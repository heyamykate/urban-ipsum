import React from 'react';

function Ipsum(props) {
    let ipsum = props.ipsum.map((obj, index) => {
      return <p key={ index }>{ obj.text }</p>
    })
    console.log('ipsum: ', props.ipsum);
    return (
      <div className="ipsum">
        { ipsum }
      </div>
      );

}

export default Ipsum;