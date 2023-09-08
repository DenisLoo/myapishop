const React = require('react');
const Layout = require('./Layout');
const OneCard = require('./OneCard');

module.exports = function Cart({ user, productsInCart }) {
  // console.log('productInCart', productsInCart);
  // console.log('userCart', user);

  // Общая сумма товаров в CART.
  const totalSum = productsInCart?.Products?.reduce(
    (acc, cur) => acc + cur.price,
    0,
  );

  return (
    <Layout user={user} productsInCart={productsInCart}>
      <div className='container'>
        {totalSum ? (
          <div className='totalSum__container'>
            <div className='totalSum__title'>Total amount: <span>${totalSum}</span></div>
            <button type='button' className='card__btn buyAll'>🛍️ buy all </button>
          </div>
        ) : (
          ''
        )}
        <div className='cards'>
          {productsInCart?.Products?.length !== 0 ? (
            productsInCart.Products.map((product) => (
              <OneCard key={product.id} product={product} user={user} />
            ))
          ) : (
            <div className='emptyCart'>
              <h2 className='emptyCart__title'>Cart 🛒 is empty 🥺</h2>
              <p className='emptyCart__link'>
                <a href='/'>Start shoping</a>
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};
