import MainContainer from '../components/Container/MainContainer';
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import Wrapper from '../components/Layout/Wrapper';
import Ipsum from '../components/Ipsum/Ipsum';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Wrapper}>
        <IndexRoute component={MainContainer} />
        <Route path="/ipsum" component={Ipsum} />
      </Route>
    </Router>
  </Provider>
);

export default Root;