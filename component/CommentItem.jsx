const React = require('react')

function CommentItem({ comment}) {
    return (
        <div className='new-comment' >
            {comment.comment}
        </div>
    )
}

module.exports = CommentItem