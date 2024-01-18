const addFormNews = document.querySelector('#add-news');
console.log(addFormNews);

if (addFormNews) {
  addFormNews.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { tittle, img, description } = e.target;
    console.log(tittle.value, img.value, description.value);
    const formData = new FormData();

    formData.append('img', img.files[0]);
    formData.append('tittle', tittle.value);
    formData.append('description', description.value);

    const res = await fetch('/api/news', {
      method: 'post',
      body: formData,
    });
    const data = await res.json();
    if (data.message === 'success') {
      document
        .querySelector('.news-cards')
        .insertAdjacentHTML('beforeend', data.html);
      e.target.reset();
    } else {
      alert(data.message);
    }
  });
}
