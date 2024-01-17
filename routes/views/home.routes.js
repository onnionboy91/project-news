const router = require('express').Router();
const HomePage = require('../../component/HomePage');

router.get('/', (req, res) => {
  const html = res.renderComponent(HomePage, { title: 'Home Page' });
  res.send(html);
});

module.exports = router;
