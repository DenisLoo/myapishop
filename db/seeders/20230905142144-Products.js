/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const result = await fetch('https://dummyjson.com/products');
    const products = await result.json();
    await queryInterface.bulkInsert(
      'Products',
      products.products.map((prod) => ({
        title: prod.title,
        description: prod.description,
        price: prod.price,
        brand: prod.brand,
        category: prod.category,
        image: prod.thumbnail,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
