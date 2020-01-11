function normalizeErrors(response) {
  return response.ok
    ? Promise.resolve(response)
    : Promise.reject(response);
}

const getAuthorizationHeader = token => ({
  authorization: `Bearer ${token}`,
});

export {
  normalizeErrors,
  getAuthorizationHeader,
};
