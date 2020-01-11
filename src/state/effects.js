import _login from '@api/login';
import getCurrentUser from '@api/getCurrentUser';
import { setUser, setToken as _setToken } from '@app/state/actionCreators';
import { isUserFetched, getToken } from '@app/state/selectors';

const setToken = token => dispatch => {
  dispatch(_setToken(token));
  localStorage.setItem('token', token);
  return token;
};

const fetchAndSetCurrentUser = token => dispatch => (
  getCurrentUser(token)
    .then(user => dispatch(setUser(user)))
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

export {
  login,
  getUserIfToken,
};
