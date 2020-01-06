import React, { useState } from "react";

function login(email, password) {
  return fetch(
    'http://localhost:9001/authorizationserver/oauth/token?client_id=mytest&client_secret=123', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: Object.entries({
        grant_type: 'password',
        scope: 'basic',
        username: email,
        password: password,
      }).map(([key, value]) => key + '=' + value).join('&')
  })
    .then(res => res.json())
    .then(res => console.log(res));
}


function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    login(email, password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        class="form-control"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="text"
        name="passord"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

export default LoginForm;
