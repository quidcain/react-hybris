import { normalizeErrors } from '@api/apiUtils';

function login({ email, password }) {
  return fetch('http://localhost:9001/authorizationserver/oauth/token?client_id=mytest&client_secret=123', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: Object.entries({
      grant_type: 'password',
      scope: 'basic',
      username: email,
      password,
    }).map(([key, value]) => `${key}=${value}`)
      .join('&'),
  })
    .then(normalizeErrors)
    .then(res => res.json())
    .then(({ access_token }) => localStorage.setItem('token', access_token));
}


export default login;
