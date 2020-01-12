import {
  normalizeErrors,
  getAuthorizationHeader,
} from '@app/api/apiUtils';

function getCurrentUser(token) {
  return fetch('http://localhost:9001/exploringcommercewebservices/v2/electronics/users/current?fields=DEFAULT', {
    method: 'GET',
    headers: token ? getAuthorizationHeader(token) : {},
  })
    .then(normalizeErrors)
    .then(res => res.json());
}

export default getCurrentUser;
