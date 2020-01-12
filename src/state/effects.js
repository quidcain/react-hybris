import _login from '@app/api/login';
import getCurrentUser from '@app/api/getCurrentUser';
import {
  setUser,
  setToken as _setToken,
  clearToken,
  clearUser,
} from '@app/state/actionCreators';
import { isUserFetched, getToken } from '@app/state/selectors';
import { removeTokenFromStorage } from '@app/utils';

const setToken = token => dispatch => {
  dispatch(_setToken(token));
  localStorage.setItem('token', token);
  return token;
};

const fetchAndSetCurrentUser = token => dispatch => (
  getCurrentUser(token)
    .then(user => dispatch(setUser(user)))
    .catch(e => {
      if(e.message == 'Failed to fetch') {
        console.error(e);
      }
      if(e instanceof Response) {
        e.status == 401 && console.log('wrong token');
      }
    })
);

const login = values => dispatch => {
  _login(values)
    .then(token => setToken(token)(dispatch))
    .then(token => fetchAndSetCurrentUser(token)(dispatch));
};

const getUserIfToken = () => (dispatch, getState) => {
  const state = getState();
  const token = getToken(state);
  if(token && !isUserFetched(state)) {
    fetchAndSetCurrentUser(token)(dispatch);
  }
};

const logout = () => dispatch => {
  dispatch(clearToken());
  dispatch(clearUser());
  removeTokenFromStorage();
};

export {
  login,
  getUserIfToken,
  logout,
};
