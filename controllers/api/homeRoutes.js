const router = require('express').Router();
// const instagramRoutes = require('../instagramController');

// Home page route
// router.get('/', async (req, res) => {
//   try {
//     res.render('about', { title: 'About Us' });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
router.get('/', (req, res) => {
  res.render('about', { title: 'About Us' });
});

// About page route
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Us' });
});

// Calendar page route
router.get('/calendar', (req, res) => {
  res.render('calendar', { title: 'Calendar' });
});

// Contact page route
router.get('/contact', (req, res) => {
  res.render('contact', {
    studioName: "Strictly Ballroom Events Center",
    hours: "Monday - Friday: 8:00am - 9:00pm",
    address: "569 N 1200 W, Orem, Utah 84057",
    phone: "801-770-1555",
    email: "strictlyballroomstudio@gmail.com"
});
});

// FAQ page route
router.get('/faq', (req, res) => {
  res.render('faq', { title: 'FAQ' });
});

// Rent Space page route
router.get('/rentspace', (req, res) => {
  res.render('rentspace', { title: 'Rent Space' });
});

// Gallery page route
router.get('/gallery', (req, res) => {
  res.render('gallery', { title: 'Gallery' });
});

module.exports = router;
