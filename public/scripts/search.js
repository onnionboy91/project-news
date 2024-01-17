const searchForm = document.querySelector('#search-news');

if (searchForm) {
  searchForm.addEventListener('submit', async (e) => {
    e.preventDefault;
    const { word } = e.target;
    const res = await fetch('/api', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ word: word.value }),
    });
  });

  const data = await res.json();
}
