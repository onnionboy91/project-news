const updateNewsForm = document.querySelector('#update-news');
if (updateNewsForm) {
  updateNewsForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { tittle, description, img } = e.target;
    console.log(tittle, description, img);
    const { id } = e.target.dataset;
    console.log(id);
    const formData = new FormData();

    formData.append('img', img.files[0]);
    formData.append('tittle', tittle.value);
    formData.append('description', description.value);

    const res = await fetch(`/api/news/${id}`, {
      method: 'put',
      body: formData,
    });

    const data = await res.json();
    if (data.message === 'success') {
      window.location.assign('/');
    } else {
      alert(data.message);
    }
  });
}
