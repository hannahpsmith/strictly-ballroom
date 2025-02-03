
const router = require('express').Router();
// const userRoutes = require('./userRoutes');
// const profileRoutes = require('./profileRoutes');
const homeRoutes = require('./homeRoutes');

// router.use('/users', userRoutes);
router.use('/', homeRoutes);
// router.use('/', profileRoutes);

module.exports = router;
