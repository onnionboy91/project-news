const router = require('express').Router();
const { News } = require('../../db/models');
//Db

router.post('/word', async (req, res) => {
  try {
    const { word, stopword } = req.body;
    const arrNews = await News.findAll();
    const arrNewsTitleStr = arrNews.map((el) => el.tittle.split(' '));
    let str = [];
    arrNewsTitleStr.forEach((el) => {
      let arrNew = el.filter((element) => element == word);
      if (arrNew.length > 0) {
        return str.push(el);
      }
    });
    // console.log(str, '9999999999999999999999999999999999999999'); //получили массив в массиве с правильным title
    let resultObj = [];
    for (let i = 0; i < str.length; i++) {
      const titleNoDb = str[i].join(' ');
      const obj = await News.findOne({ where: { tittle: titleNoDb } });
      resultObj.push(obj);
    }

    // console.log(resultObj, 'ffffffffffffffffffffffffffffff'); // получили три объекта

    res.json({ message: 'успех', resultObj });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
