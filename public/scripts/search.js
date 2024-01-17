const searchForm = document.querySelector('#search-news');

if (searchForm) {
  searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { word, stopword } = e.target;
    const res = await fetch('/api/word', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ word: word.value, stopword: stopword.value }),
    });

    const data = await res.json();
    if (data.message === 'успех') {
      document
        .querySelector('.blabla')
        .insertAdjacentHTML('beforeend', ' data.html');
      addForm.reset();
    }
    res.send(data.message);
  });
}
