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

module.exports = router;
