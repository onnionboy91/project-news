const singInForm = document.querySelector('.sing-in');
const singUpForm = document.querySelector('.sing-up');

if (singInForm) {
  singInForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { name, password } = event.target;
    if (name.value.trim() && password.value.trim()) {
      const res = await fetch('/api/sing/in', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
          password: password.value,
        }),
      });
      const data = await res.json();
      if (data.message === 'успех') {
        window.location.assign('/');
        return;
      }
      alert(data.message);
    }
    alert('Вы оставили пустым пароль или логин');
    return;
  });
}

if (singUpForm) {
  singUpForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { name, password, rpassword } = event.target;
    if (name.value.trim() && password.value.trim() && password.value.trim()) {
      const res = await fetch('/api/sing/up', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
          password: password.value,
          rpassword: rpassword.value,
        }),
      });
      const data = await res.json();
      if (data.message === 'успех') {
        window.location.assign('/');
        return;
      }
      alert(data.message);
    }
    alert('Вы оставили пустым пароль или логин');
    return;
  });
}
