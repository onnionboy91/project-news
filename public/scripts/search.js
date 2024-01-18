const searchForm = document.querySelector('#search-news');

if (searchForm) {
  searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { word, stopword } = e.target;
    if (word.value.trim() && stopword.value.trim()) {
      const res = await fetch('/api/word', {
        method: 'post',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ word: word.value, stopword: stopword.value }),
      });

      const data = await res.json();
      console.log(data);
      if (data.message === 'успех') {
        const news = document.querySelector('.news-cards');
        news.innerHTML = data.html;
        return;
      }
      alert(data.message);
    }
    alert('Вы оставили пустым поле:Ключевое слово или поле:Исключить слово');
    return;
  });
}
