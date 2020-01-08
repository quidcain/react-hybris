import React from 'react';
import { Provider } from 'react-redux';
import createStore from './src/state/createStore';

export default ({ element }) => {
  const store = createStore();
  if(window) {
    window.store = store;
  }
  return <Provider store={store}>{element}</Provider>
}
