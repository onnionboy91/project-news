const router = require('express').Router();
// view
const homeRouter = require('./views/home.routes');
const singRouter = require('./views/sing.routes');
// api
const apiSingRouter = require('./api/api.routes');
const apiSearchRouter = require('./api/api.search.routes');
const apiNewsRouter = require('./api/api.news.routes');

// view use
router.use('/', homeRouter);
router.use('/sing', singRouter);
// api use
router.use('/api/sing', apiSingRouter);
router.use('/api', apiSearchRouter);
router.use('/api/news', apiNewsRouter);

module.exports = router;
