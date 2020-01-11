import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { login } from '@app/state/effects';

function LoginForm({ login }) {
  const { handleSubmit, register, errors } = useForm({ mode: 'onBlur' });
  const onSubmit = values => login(values);

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

const effects = {
  login,
};

export default connect(
  null,
  effects,
)(LoginForm);
