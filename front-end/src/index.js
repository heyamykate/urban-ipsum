import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import ipsumReducer from './redux/reducers';
import Root from './config/routes';
import './assets/style/main.scss';

const store = createStore(ipsumReducer);

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
);
