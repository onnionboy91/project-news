const router = require('express').Router();
const HomePage = require('../../component/HomePage');
const {News} = require('../../db/models')

router.get('/', async (req, res) => {
  try {
  const news = await News.findAll({ order: [['id', 'ASC']]})
  const html = res.renderComponent(HomePage, { title: 'Home Page' , news});
  res.send(html);
} catch ({ message }) {
  res.json({ message });
}
});

module.exports = router;
