import {
  normalizeErrors,
  getAuthorizationHeader,
  isTokenAvailable,
} from '@api/apiUtils';

function getCurrentUser() {
  return fetch('http://localhost:9001/exploringcommercewebservices/v2/electronics/users/current?fields=DEFAULT', {
    method: 'GET',
    headers: isTokenAvailable() ? getAuthorizationHeader() : {},
  })
    .then(normalizeErrors)
    .then(res => res.json())
    .then(res => console.log(res));
}

export default getCurrentUser;
