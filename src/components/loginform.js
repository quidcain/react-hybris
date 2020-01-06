import React, { useState } from 'react';

function login(email, password) {
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
    .then(res => res.json())
    .then(res => console.log(res));
}


function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="container mb-3">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          className="form-control mb-3"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="passord"
          value={password}
          className="form-control mb-3"
          onChange={e => setPassword(e.target.value)}
        />
        <input
          type="submit"
          className="btn btn-primary"
        />
      </form>
    </div>
  );
}

export default LoginForm;
