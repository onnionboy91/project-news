const router = require('express').Router();
const HomePage = require('../../component/HomePage');
const NewsPage = require('../../component/NewsPage');
const UpdateCommentPage = require('../../component/UpdateCommentPage');
const {News, User, Comment} = require('../../db/models')

router.get('/', async (req, res) => {
  try {
  const news = await News.findAll({ order: [['id', 'ASC']]})
  const html = res.renderComponent(HomePage, { title: 'Home Page' , news});
  res.send(html);
} catch ({ message }) {
  res.json({ message });
}
});

router.get('/update/:comentId', async (req,res) => {
  try {
    const {comentId} = req.params
    const comment = await Comment.findOne({where: {id: comentId}})
    const html = res.renderComponent(UpdateCommentPage, {title: `Изменение коментария`, comment })
    res.send(html)
  } catch ({message}) {
    res.json({message})
  }
})

router.get('/:newsOneId', async (req,res) => {
  try {
    const {newsOneId} = req.params
    const newsOne = await News.findOne({where: { id: newsOneId}})
    const comments = await Comment.findAll({where: {news_id:newsOneId}})
    const html = res.renderComponent(NewsPage, {title: `${newsOne.tittle}`, newsOne, comments})
    res.send(html)
  } catch ({message}) {
    res.json({message})
  }
})
module.exports = router;
