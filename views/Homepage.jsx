const React = require('react');
const Layout = require('./Layout');
const OneCard = require('./OneCard');

module.exports = function Homepage({ products, user }) {
  console.log('userHomepage', user);
  return (
    <Layout user={user}>
      {!user && <div className='nouser__title'>To buy products you must be registered!</div>}
      <div className='container'>
        <div className='cards'>
          {products &&
            products.map((product) => (
              <OneCard key={product.id} product={product} user={user} />
            ))}
        </div>
      </div>
    </Layout>
  );
};
