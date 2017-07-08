var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Monterey Bay Surf Lessons'
  });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'This is ABOUT'});
});

router.get('/faq', function(req, res, next) {
  res.render('faq', { title: 'This is FAQ'});
});

router.get('/paddleboards', function(req, res, next) {
  res.render('paddleboards', { title: 'This is PADDLEBOARDS' });
});

router.get('/reviews', function(req, res, next) {
  res.render('reviews', { title: 'This is reviews'});
});

router.get('/photos', function(req, res, next) {
  res.render('photos', { title: 'This is photos'});
});

module.exports = router;
