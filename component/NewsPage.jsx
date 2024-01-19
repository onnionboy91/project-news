const React = require('react');
const Layout = require('./Layout');
const CommentsItem = require('./CommentItem');
function NewsPage({ title, newsOne, user, comments }) {
  return (
    <Layout title={title} user={user}>
      <div className="container-NewsPage">
        <h1>{newsOne.tittle}</h1>
        <div className="fon-newPage">
          <div className="card NewsPageCard" style={{ display: 'flex' }}>
            <img src={newsOne.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <p class="card-text">{newsOne.description}</p>
            </div>
          </div>
        </div>
        <h1>Комментарии</h1>
        <div className="fon-com">
          {user && (
            <div className="containe-update-com">
              <form
                method="post"
                data-id={newsOne.id}
                className="comment-up container comment-form "
              >
                <div className="container mb-3">
                  <label className="form-label text-update">
                    Написать комментарий{' '}
                  </label>
                  <input name="comment" className="input-update" type="text" />
                </div>
                <div className="container mb-3">
                  <button className="btn btn-primary" type="submit">
                    Отправить
                  </button>
                </div>
              </form>
            </div>
          )}
          <div className="all-comment container-comment">
            {comments.map((comment) => (
              <CommentsItem
                key={comment.id}
                newsOne={newsOne}
                user={user}
                comment={comment}
              ></CommentsItem>
            ))}
          </div>
        </div>
        <div className="container-logout-NewsPage">
          <a className="nav-link aNewPage" aria-current="page" href="/">
            Вернуться на главную
          </a>
        </div>
      </div>
    </Layout>
  );
}

module.exports = NewsPage;
