const router = require('express').Router();
// view
const homeRouter = require('./views/home.routes');
const singRouter = require('./views/sing.routes');
// api
const apiSingRouter = require('./api/api.routes');

// view use
router.use('/', homeRouter);
router.use('/sing', singRouter);
// api use
router.use('/api/sing', apiSingRouter);

module.exports = router;
