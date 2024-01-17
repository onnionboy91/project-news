const router = require('router').Router();
//Db

router.post('/', async (req, res) => {
  try {
    const { word } = req.body;
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
