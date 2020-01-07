function normalizeErrors(response) {
  return response.ok
    ? Promise.resolve(response)
    : Promise.reject(response);
}

export {
  normalizeErrors,
};
