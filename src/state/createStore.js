import {
  createStore as reduxCreateStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import * as utils from '@app/utils';

const initialState = {
  ...(
    utils.isBrowser()
      ? { token: utils.readTokenFromStorage() }
      : {}
  ),
};

const createStore = () => reduxCreateStore(
  reducer,
  initialState,
  applyMiddleware(thunk),
);

export default createStore;
