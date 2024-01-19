const React = require('react');
const Layout = require('./Layout');
const CommentsItem = require('./CommentItem');
function NewsPage({ title, newsOne, user, comments }) {
  return (
    <Layout title={title} user={user}>
      <div className="container-NewsPage">
        <h1>{newsOne.tittle}</h1>
        <div className="card NewsPageCard" style={{ display: 'flex' }}>
          <img src={newsOne.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <p class="card-text">{newsOne.description}</p>
          </div>
        </div>
        {user && (
          <div>
            <form
              action=""
              method="post"
              data-id={newsOne.id}
              className="comment-up container comment-form "
            >
              <h1>Комментарии</h1>
              <div className="container">
                <label>Написать комментарий </label>
                <input name="comment" type="text" />
              </div>
              <div className="container">
                <button className="btn btn-primary" type="submit">
                  Отправить
                </button>
              </div>
            </form>
          </div>
        )}
        <div className="all-comment">
          {comments.map((comment) => (
            <CommentsItem
              key={comment.id}
              newsOne={newsOne}
              user={user}
              comment={comment}
            ></CommentsItem>
          ))}
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
