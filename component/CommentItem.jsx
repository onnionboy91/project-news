const React = require('react');

function CommentItem({ comment, user }) {
  return (
    <form data-id={comment.id} className="new-comment-form">
      <div className="new-comment">
        <div className="name-comment">
          <p>{comment.comment_user_name}</p>
        </div>
        <div className="comment-comment">
          <p>{comment.comment}</p>
        </div>

        {user && (
          <>
            {user.id === comment.user_id &&
              new Date().getTime() - comment.createdAt.getTime() < 30000 && (
                <div className="container new-comment-input btn btn-primary">
                  <a
                    href={`/update/${comment.id}`}
                    className="btn btn-update-comment"
                    type="submit"
                  >
                    Изменить
                  </a>
                </div>
              )}
          </>
        )}
      </div>
    </form>
  );
}

module.exports = CommentItem;
