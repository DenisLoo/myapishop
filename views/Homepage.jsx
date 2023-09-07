const React = require('react');
const Layout = require('./Layout');
const OneCard = require('./OneCard');

module.exports = function Homepage({ products, user }) {
  console.log('userHomepage', user);
  return (
    <Layout user={user}>
      <div className='container'>Homepage</div>
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
