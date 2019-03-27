import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import reducers from '../reducers';
import reduxThunk from 'redux-thunk';

export default function configureStore(initialState = {}) {
  const composed: any[] = [
    applyMiddleware(reduxThunk),
  ];

  if (!PRODUCTION) {
    const DevTools = require('../components/DevTools').default;
    composed.push(DevTools.instrument());
  }

  return createStore(
    combineReducers(reducers),
    initialState,
    compose(...composed),
  );
}
