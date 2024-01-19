const router = require('express').Router();
const NewsItem = require('../../component/NewsItem');
const { News } = require('../../db/models');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post('/', upload.single('img'), async (req, res) => {
  try {
    const { tittle, description } = req.body;
    console.log(tittle, description);

    const newFileUrl = `/img/${req.file.originalname}`;

    const newsOne = await News.create({ tittle, img: newFileUrl, description });

    const html = res.renderComponent(NewsItem, { newsOne }, { doctype: false });
    res.json({ message: 'success', html });
  } catch ({ message }) {
    res.json({ message: 'error api.news.router' });
  }
});

router.delete('/:newsId', async (req, res) => {
  try {
    const { newsId } = req.params;
    const result = await News.destroy({ where: { id: newsId } });
    if (result > 0) {
      res.json({ message: 'success' });
      return;
    }
  } catch ({ message }) {
    res.json({ message: 'error delete' });
  }
});

router.put('/:newsId', upload.single('img'), async (req, res) => {
  try {
    console.log(tittle, description);
    const { tittle, description } = req.body;
    const { newsId } = req.params;

    const newFileUrl = `/img/${req.file.originalname}`;

    const result = await News.update(
      {
        tittle,
        img: newFileUrl,
        description,
      },
      { where: { id: newsId } }
    );
    if (result > 0) {
      res.json({ message: 'success' });
    }
  } catch ({ message }) {
    res.json({ message: 'error put' });
  }
});

module.exports = router;
