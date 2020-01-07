function normalizeErrors(response) {
  return response.ok
    ? Promise.resolve(response)
    : Promise.reject(response);
}

const getAuthorizationHeader = () => ({
  authorization: `Bearer ${localStorage.getItem('token')}`,
});

const isTokenAvailable = () => localStorage.getItem('token') != null;

export {
  normalizeErrors,
  getAuthorizationHeader,
  isTokenAvailable,
};
