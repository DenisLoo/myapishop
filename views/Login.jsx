const React = require('react');
const Layout = require('./Layout');

module.exports = function Login({ user }) {
  return (
    <Layout user={user}>
      <div className='container__menu'>
        <form className='login__form form'>
          <h2 className='menu__title'>Sign in</h2>
          <input
            type='text'
            name='login'
            className='form__input'
            placeholder='Your login'
          />
          <input
            type='password'
            name='password'
            className='form__input'
            placeholder='Your password'
          />
          <button type='submit' className='form__btn'>
            Sign in
          </button>
          <p className='error__message_log' />
        </form>
      </div>
    </Layout>
  );
};
