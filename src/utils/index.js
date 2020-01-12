import Snackbar from 'node-snackbar';

const isBrowser = () => typeof window !== 'undefined';
const isTokenAvailable = () => localStorage.getItem('token') != null;
const readTokenFromStorage = () => localStorage.getItem('token');
const removeTokenFromStorage = () => localStorage.removeItem('token');
const showSnackbar = text => {
  Snackbar.show({
    pos: 'bottom-center',
    text,
  });
};

export {
  isBrowser,
  isTokenAvailable,
  readTokenFromStorage,
  removeTokenFromStorage,
  showSnackbar,
};
