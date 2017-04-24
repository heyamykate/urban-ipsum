import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { fetchIpsum } from './redux/actions';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}
