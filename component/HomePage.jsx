const React = require('react');
const Layout = require('./Layout');

const AddNewsForm = require('./AddNewsForm');
const NewsCardsList = require('./NewsCardsList');
function HomePage({ title, user, news }) {
  return (
    <Layout title={title} user={user}>
      <div className="container-body">
        {user && user.isAdmin === true && <AddNewsForm />}
        <div>
          <h1 className="title">Home page</h1>
        </div>

        <form  className='container-form-str' id="search-news">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Ключевое слово
            </label>
            <input
              name="word"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Исключить слово
            </label>
            <input
              name="stopword"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Поиск
          </button>
        </form>

        <h1 className="title">Новости</h1>
        <NewsCardsList news={news}  user={user}/>
      </div>
    </Layout>
  );
}

module.exports = HomePage;
