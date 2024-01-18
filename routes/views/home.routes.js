const router = require('express').Router();
const HomePage = require('../../component/HomePage');
const {News} = require('../../db/models')
const NewsPage = require('../../component/NewsPage');
router.get('/', async (req, res) => {
  try {
  const news = await News.findAll({ order: [['id', 'ASC']]})
  const html = res.renderComponent(HomePage, { title: 'Home Page' , news});
  res.send(html);
} catch ({ message }) {
  res.json({ message });
}
});

router.get('/:newsOneId', async (req,res) => {
  try {
    const {newsOneId} = req.params
    const newsOne = await News.findOne({where: { id: newsOneId}})
    const html = res.renderComponent(NewsPage, {title: `${newsOne.tittle}`, newsOne})
    res.send(html)
  } catch ({message}) {
    res.json({message})
  }
})
module.exports = router;


module.exports = router;
