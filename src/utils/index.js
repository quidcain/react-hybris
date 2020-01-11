const isBrowser = () => typeof window !== 'undefined';
const isTokenAvailable = () => localStorage.getItem('token') != null;
const readTokenFromStorage = () => localStorage.getItem('token');

export {
  isBrowser,
  isTokenAvailable,
  readTokenFromStorage,
};
