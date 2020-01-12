import { createAction } from 'redux-actions';
import types from './types';

export const setUser = createAction(types.SET_USER);
export const setToken = createAction(types.SET_TOKEN);
export const clearToken = createAction(types.CLEAR_TOKEN);
export const clearUser = createAction(types.CLEAR_USER);
