const React = require('react');
const NavBar = require('./NavBar');

module.exports = function Layout({ children, user }) {
  console.log('userLayout', user);
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='stylesheet' href='/stylesheets/index.css' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
        <script defer src='/js/userfront.js' />
        <script defer src='/js/cart.js' />
        <title>myapishop</title>
      </head>
      <body>
        <header className='nav'>
          <NavBar user={user} />
        </header>
        <main>
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
};
