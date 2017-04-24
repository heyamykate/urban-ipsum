import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import ipsumReducer from './redux/reducers';
import routes from './config/routes';
import './assets/style/main.scss';

const store = createStore(ipsumReducer);

ReactDOM.render(
    <Provider store={ store }>
      { routes }
    </Provider>,
    document.getElementById('root')
);
