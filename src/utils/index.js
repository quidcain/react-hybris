const isBrowser = () => typeof window !== 'undefined';
const isTokenAvailable = () => localStorage.getItem('token') != null;
const readTokenFromStorage = () => localStorage.getItem('token');
const removeTokenFromStorage = () => localStorage.removeItem('token');

export {
  isBrowser,
  isTokenAvailable,
  readTokenFromStorage,
  removeTokenFromStorage,
};
