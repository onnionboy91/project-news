const router = require('express').Router();
// view
const homeRouter = require('./views/home.routes');
// api

// view use
router.use('/', homeRouter);
// api use

module.exports = router;
