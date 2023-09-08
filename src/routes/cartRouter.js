const router = require('express').Router();
const { response } = require('express');
const { Cart } = require('../../db/models');

// добавление товара в корзину/BD
router.post('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // console.log('req.body', req.body);
    // console.log('req.params', req.params);
    await Cart.create({
      user_id: req.session?.user?.id,
      product_id: id,
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// удаление товара из корзины/BD
router.delete('/:id', async (req, res) => {
  try {
    await Cart.destroy({
      where: {
        product_id: req.params.id,
        user_id: req.session?.user?.id,
      },
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// имитация покупки всех карточек из корзины
router.delete('/', async (req, res) => {
  try {
    await Cart.destroy({
      where: {
        user_id: req.session?.user?.id,
      },
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
