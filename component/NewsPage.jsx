const React = require('react');
const Layout = require('./Layout');

function NewsPage({title, newsOne,user}) {
  return (
    <Layout title={title} user={user}>
      <h1>{newsOne.tittle}</h1>
      <div className='card' style={{ display: 'flex' }}>
      <img src={newsOne.img} className='card-img-top' alt='...' />
      <div className='card-body'>
        <p class='card-text'>
          {newsOne.description}
        </p>
      </div>
    </div>
    <li className='nav-item'>
              <a className='nav-link' aria-current='page' href='/'>
                Вернуться на главную
              </a>
            </li>
    </Layout>
  );
}

module.exports = NewsPage;