const getUser = state => state.user || {};
const getUserName = state => getUser(state).name;
const isUserFetched = state => !!getUser(state).uid;

const getToken = state => state.token;

export {
  getUserName,
  isUserFetched,
  getToken,
};
