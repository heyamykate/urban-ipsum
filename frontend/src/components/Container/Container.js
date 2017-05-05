import React from 'react';

function Container(props) {
  let divClass = `${props.containerClass} container`;
    return (
      <div className={divClass}>
        { props.children }
      </div>
    );
}
export default Container;
