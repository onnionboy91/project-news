const router = require('express').Router()
const {Comment} = require('../../db/models')
const CommentItem = require('../../component/CommentItem')


router.post('/', async (req,res)=>{
    try {
        // const {newsId} = req.params
        const {comment, newsId} = req.body
        const newComment = await Comment.create({comment,comment_user_name:res.locals.user.name ,user_id:res.locals.user.id, news_id: newsId})
        const html = res.renderComponent(CommentItem, {comment: newComment}, { doctype: false })
        res.json({
            message: 'success',
            html,
        })
    } catch ({message}) {
        res.json({message})
    }
})

router.put('/:commentId', async (req,res)=>{
    const { newsId } = req.params;
  if(newsId) {
    try {
        const {comment } = req.body
        
        const {commentId} = req.params
        const [result] = await Comment.update(
            {comment}, 
            {where: {id:commentId}}
        )
        if(result>0){
            res.json({message: 'success'})
        }
    } catch ({message}) {
        res.json({message:'ошибка в пут комент'})
    }
}
})

module.exports = router;
