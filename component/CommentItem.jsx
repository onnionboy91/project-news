const React = require('react');

function CommentItem({ comment, user }) {
    return (
        <form data-id={comment.id} className='new-comment-form'>
            
                <div className='new-comment'>
                <div>
                    {comment.comment_user_name}
                </div>
                <div>
                    {comment.comment}
                </div>
            
                {user && (
                    <>
                        {user.id === comment.user_id && (new Date().getTime() - comment.createdAt.getTime())<10000   && (
                        <div className="container new-comment-input">
                            <a href={`/update/${comment.id}`} className="btn btn-update-comment" type="submit">
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