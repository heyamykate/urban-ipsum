import MainContainer from '../components/Container/MainContainer';
import React from 'react';
import { HashRouter, Route  } from 'react-router-dom'

const routes = (
  <HashRouter>
    <div>
      <Route path='/' component={MainContainer} />
    </div>
  </HashRouter>
);

export default routes;