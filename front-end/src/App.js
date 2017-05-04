import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RouteTransition } from 'react-router-transition';
import history from './history';

import Wrapper from './components/Layout/Wrapper';
import MainContainer from './components/Container/MainContainer';
import Ipsum from './components/Ipsum/Ipsum';

const App = () => (
  <Router history={history}>
    <Wrapper>
      <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route
            path="/ipsum/:num?"
            component={ Ipsum } />
          <Route component={MainContainer} />
      </Switch>
    </Wrapper>
  </Router>
);

export default App;
