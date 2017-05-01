import React from 'react';

import Header from './Header';

function Wrapper(props) {
  return (
    <div className="wrapper">
      <Header />
      { props.children }
    </div>
  );
}
 export default Wrapper;