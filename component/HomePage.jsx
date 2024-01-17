const React = require('react');
const Layout = require('./Layout');
const NewsItem = require('./NewsItem');

function HomePage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div>
        <h1 className='title'>Home page</h1>
      </div>
      <div className='search' style={{ margin: '50px' }}>
        <form id='search-news'>
          <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              Ключевое слово
            </label>
            <input
              name='word'
              type='text'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleInputPassword1' className='form-label'>
              Исключить слово
            </label>
            <input
              name='stopword'
              type='text'
              className='form-control'
              id='exampleInputPassword1'
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Поиск
          </button>
        </form>
      </div>
      <h1 className='title'>Новости</h1>
      <div className='news-cards blabla'>
        <NewsItem />
      </div>
    </Layout>
  );
}

module.exports = HomePage;
