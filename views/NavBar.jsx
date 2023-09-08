const React = require('react');

module.exports = function NavBar({ user }) {
  console.log('userNav', user);
  return (
    <div className='container'>
      <nav className='nav_wrapper'>
        <div className='nav__logo'>
          <img
            src='/stylesheets/img/logo.jpg'
            alt='logo'
            className='nav__logo_img'
          />
        </div>
        {user && <p className='nav__menu_user'>Hello, {user.login}!</p>}
        {user ? (
          <ul className='nav__menu'>
            <li className='nav__menu_item active'>
              <a className='nav__menu_link' href='/'>
                Home
              </a>
            </li>

            <li className='nav__menu_item'>
              <a className='nav__menu_link' href='/cart'>
                Cart
              </a>
            </li>

            <li className='nav__menu_item' id='logout'>
              <a className='nav__menu_link' href='/user/logout'>
                Logout
              </a>
            </li>
          </ul>
        ) : (
          <ul className='nav__menu'>
            <li className='nav__menu_item active'>
              <a className='nav__menu_link' href='/'>
                Home
              </a>
            </li>
            <li className='nav__menu_item'>
              <a className='nav__menu_link' href='/register'>
                Register
              </a>
            </li>
            <li className='nav__menu_item'>
              <a className='nav__menu_link' href='/login'>
                Login
              </a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};
