const regForm = document.querySelector('.register__form');
const loginForm = document.querySelector('.login__form');
const logoutBtn = document.querySelector('#logout');
// console.log(regForm);
// console.log(loginForm);

regForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const res = Object.fromEntries(data);
  console.log(res);
  if (!res.login || !res.email || !res.password) {
    alert('Please fill out fields on the Registration form!');
  } else {
    try {
      const regData = await fetch('/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(res),
      });
      window.location.replace('/');
    } catch (error) {
      console.log(error);
    }
  }
});

// loginForm.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   const data = new FormData(e.target);
//   const res = Object.fromEntries(data);
//   if (!res.login || !res.password) {
//     alert('Please fill out fields on the Login form!)');
//   } else {
//     try {
//       const logData = await fetch('/user/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(res),
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }
// });

// logoutBtn.addEventListener('click', async (e) => {
//   try {
//     const response = await fetch('/user/logout');
//     if (response.redirected) {
//       window.location = response.url;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });
