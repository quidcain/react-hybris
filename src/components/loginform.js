import React from 'react';
import { useForm } from 'react-hook-form';

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
    .then(res => res.json())
    .then(res => console.log(res));
}

function LoginForm() {
  const { handleSubmit, register, errors } = useForm({ mode: 'onBlur' });
  const onSubmit = values => {
    login(values);
  };

  return (
    <div className="container mb-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-3">
          <input
            type="text"
            name="email"
            className="form-control"
            ref={register({
              required: 'Required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'invalid email address',
              },
            })}
          />
          <span className="form-text text-danger">
            {errors.email && errors.email.message}
          </span>
        </div>

        <input
          type="password"
          name="password"
          className="form-control mb-3"
          ref={register({})}
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
