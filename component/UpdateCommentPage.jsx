const React = require('react');
const Layout = require('./Layout');
function UpdateCommentPage({ title, user, comment }) {
  return (
    <Layout title={title} user={user}>
      <div className="ubdate-form">
        <form
          data-id={comment.id}
          data-newsid={comment.news_id}
          className="container-form-str  update-comment-form"
        >
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Изменить комментарий
            </label>
            <input
              name="comment"
              type="text"
              className="form-control"
              defaultValue={comment.comment}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Изменить
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = UpdateCommentPage;
