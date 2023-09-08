const addBtn = document.querySelectorAll('.buy');
const deleteBtn = document.querySelectorAll('.delete');
const buyAll = document.querySelector('.buyAll');
// логика кнопки добавить в корзину
if (window.location.pathname === '/') {
  addBtn?.forEach((el) => (el.style.display = 'block'));
  addBtn?.forEach((el) =>
    el.addEventListener('click', async (e) => {
      const { productid } = e.target.dataset;
      const param = `/cart/${productid}`;
      console.log(param);
      try {
        const response = await fetch(param, {
          credentials: 'include',
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(),
        });
      } catch (error) {
        console.log(error);
      }
    }),
  );
}

// логика кнопки удалить из корзины
if (window.location.pathname === '/cart') {
  deleteBtn?.forEach((el) => (el.style.display = 'block'));
  deleteBtn?.forEach((el) =>
    el.addEventListener('click', async (e) => {
      const { productid } = e.target.dataset;
      const param = `/cart/${productid}`;
      console.log(param);

      try {
        const response = await fetch(param, { method: 'DELETE' });
        // если с Server пришел 200 =>
        if (response.ok) {
          const delCard = e.target.closest('.card');
          delCard.remove();
        }
      } catch (error) {
        console.log(error);
      }
    }),
  );
}

buyAll?.addEventListener('click', async (e) => {
  try {
    const response = await fetch('/cart', { method: 'DELETE' });
    if (response.ok) {
      const cards = document.querySelector('.cards');
      const totalsum = document.querySelector('.totalSum__container')
      const container = e.target.closest('.container');
      cards.remove();
      totalsum.remove();
      const successAnswer = document.createElement('div');
      successAnswer.className = 'buymessage';
      successAnswer.innerText = 'Thanks for your order! 🤗';
      container.appendChild(successAnswer);
    }
  } catch (error) {
    console.log(error);
  }
});
