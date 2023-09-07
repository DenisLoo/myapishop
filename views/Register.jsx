const React = require('react');
const Layout = require('./Layout');

module.exports = function Register() {
  return (
    <Layout>
      <h2 className='menu__title'>Register menu</h2>
      <div className='container__menu'>
        <form className='register__form'>
          <input
            type='text'
            name='login'
            className='form__input'
            placeholder='Your login'
          />
          <input
            type='email'
            name='email'
            className='form__input'
            placeholder='Your email'
          />
          <input
            type='password'
            name='password'
            className='form__input'
            placeholder='Your password'
          />
          <button type="submit" className='form__btn'>Register</button>
        </form>
      </div>
      <script defer src='/js/userfront.js' />
    </Layout>
  );
};
