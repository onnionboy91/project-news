const deleteNews = document.querySelector('.news-cards');

if (deleteNews) {
  deleteNews.addEventListener('click', async (e) => {
    if (e.target.classList.contains('delete')) {
      const { id } = e.target.dataset;
      console.log(id);
      const res = await fetch(`/api/news/${id}`, {
        method: 'delete',
      });
      const data = await res.json();
      console.log(data);
      if (data.message === 'success') {
        e.target.closest('.card').remove();
      } else {
        alert(data.message);
      }
    }
  });
}
