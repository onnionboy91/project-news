const router = require('express').Router();
const { News } = require('../../db/models');
const { Op } = require('sequelize');
const HomePage = require('../../component/HomePage');
const NewsCardsList = require('../../component/NewsCardsList');
//Db

router.post('/word', async (req, res) => {
  try {
    const { word, stopword } = req.body;
    let news = await News.findAll({
      where: {
        tittle: {
          [Op.substring]: word,
          [Op.notLike]: `%${stopword}%`,
        },
      },
    });
    const html = res.renderComponent(NewsCardsList, {
      title: 'Home Page',
      news,
    });
    res.json({ message: 'успех', html });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
