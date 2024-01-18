const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const generateTokens = require('../../utils/authUtils');
const configJWT = require('../../middleware/configJWT');

router.post('/in', async (req, res) => {
  try {
    const { name, password } = req.body;

    const user = await User.findOne({ where: { name: name } });

    const proverka = await bcrypt.compare(password, user.password);
    if (user && proverka) {
      const { accessToken, refreshToken } = generateTokens({
        user: { id: user.id },
      });
      res.cookie('access', accessToken, {
        maxAge: 1000 * 60 * 5,
        httpOnly: true,
      });
      res.cookie('refresh', refreshToken, {
        maxAge: 1000 * 60 * 60 * 12,
        httpOnly: true,
      });
      res.json({ message: 'успех' });
      return;
    }
  } catch ({ message }) {
    res.json({ message, text: 'ошибка на api-routes-in' });
  }
});

router.post('/up', async (req, res) => {
  try {
    const { name, password, rpassword } = req.body;
    const user = await User.findOne({ where: { name: name } });
    if (user) {
      res.json({
        message: 'Такой пользователь уже есть, Придумайте другой Логин',
      });
      return;
    }
    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, password: hash });

    const { accessToken, refreshToken } = generateTokens({
      user: { id: newUser.id },
    });
    res.cookie('access', accessToken, {
      maxAge: 1000 * 60 * 5,
      httpOnly: true,
    });
    res.cookie('refresh', refreshToken, {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    });

    res.json({ message: 'успех' });
  } catch ({ message }) {
    console.log();
    res.json({ message, text: 'ошибка на api-routes-in' });
  }
});

router.get('/logout', (req, res) => {
  console.log(configJWT.access.type);
  res.clearCookie(configJWT.access.type).clearCookie(configJWT.refresh.type);
  res.redirect('/');
});
module.exports = router;
