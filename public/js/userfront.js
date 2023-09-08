const regForm = document.querySelector('.register__form');
const loginForm = document.querySelector('.login__form');
const logoutBtn = document.querySelector('#logout');

regForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const res = Object.fromEntries(data);
  console.log(res);

  try {
    const response = await fetch('/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(res),
    });
    // если user записан в BD
    if (response.ok) {
      window.location.replace('/');
    }
    // если с Back пришел статус !200
    const dataError = await response.json();
    const errorMessage = document.querySelector('.error__message_reg');
    errorMessage.innerText = dataError.message;
    errorMessage.style.display = 'block';
  } catch (error) {
    console.log(error);
  }
});
// login
loginForm?.addEventListener('submit', async (e) => {
  console.log(e.target);
  e.preventDefault();
  const data = new FormData(e.target);
  const res = Object.fromEntries(data);

  try {
    const response = await fetch('/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(res),
    });
    if (response.ok) {
      window.location.replace('/');
    }
    const dataError = await response.json();
    const errorMessage = document.querySelector('.error__message_log');
    errorMessage.innerText = dataError.message;
    errorMessage.style.display = 'block';
  } catch (error) {
    console.log(error);
  }
});

// logout
logoutBtn?.addEventListener('click', async (e) => {
  try {
    const response = await fetch('/user/logout');
    if (response.redirected) {
      window.location = response.url;
    }
  } catch (error) {
    console.log(error);
  }
});
