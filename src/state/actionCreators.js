import { createAction } from 'redux-actions';
import types from './types';

export const setUser = createAction(types.SET_USER);
export const setToken = createAction(types.SET_TOKEN);
