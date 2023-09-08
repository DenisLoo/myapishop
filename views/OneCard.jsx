const React = require('react');
// const Layout = require('./Layout');

module.exports = function OneCard({ product, user }) {
  return (
    <div className='card'>
      <img src={product?.image} className='card__img' alt='product card' />
      <div className='card__info'>
        <p className='card__price'>${product?.price}</p>
        <p className='card__title'>{product?.title}</p>
        <p className='card__category'>{product?.category}</p>

        <button
          type='button'
          className='card__btn buy'
          data-productid={product.id}
          disabled={!user}>
          🛒 buy
        </button>

        <button
          type='button'
          className='card__btn delete'
          data-productid={product.id}>
          🗑 delete
        </button>
      </div>
    </div>
  );
};

// title: prod.title,
// description: prod.description,
// price: prod.price,
// brand: prod.brand,
// category: prod.category,
// image: prod.thumbnail,
// createdAt: new Date(),
// updatedAt: new Date(),
