const router = require('express').Router();
const homeRoutes = require('./api/homeRoutes');
// const apiRoutes = require('./api');
// const profileRoutes = require('./api/profileRoutes');

// Render the login page
// router.get('/login', (req, res) => {
//   res.render('login', { title: 'Login' });
// });

router.use('/', homeRoutes);
// router.use('/api', apiRoutes);
// router.use('/', profileRoutes);

module.exports = router;
