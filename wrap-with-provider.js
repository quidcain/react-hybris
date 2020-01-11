import React from 'react';
import { Provider } from 'react-redux';
import createStore from './src/state/createStore';
import { isBrowser } from '@app/utils';

export default ({ element }) => {
  const store = createStore();
  if(isBrowser()) {
    window.store = store;
  }
  return <Provider store={store}>{element}</Provider>
}
