const router = require('express').Router();
const SingInPage = require('../../component/SingInPage');
const SingUpPage = require('../../component/SingUpPage');

router.get('/in', (req, res) => {
  const html = res.renderComponent(SingInPage, {
    title: ' Страничка для входа',
  });
  res.send(html);
});

router.get('/up', (req, res) => {
  const html = res.renderComponent(SingUpPage, {
    title: ' Страничка для регистрации',
  });
  res.send(html);
});




module.exports = router;
