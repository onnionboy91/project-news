const router = require('express').Router()
const {Comment} = require('../../db/models')
const CommentItem = require('../../component/CommentItem')


router.post('/', async (req,res)=>{
    try {
        // const {newsId} = req.params
        const {comment, newsId} = req.body
        const newComment = await Comment.create({comment, user_id:res.locals.user.id, news_id: newsId})
        const html = res.renderComponent(CommentItem, {comment: newComment}, { doctype: false })
        res.json({
            message: 'success',
            html,
        })
    } catch ({message}) {
        res.json({message})
    }
})

module.exports = router;
