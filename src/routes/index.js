const router = require('express').Router();
const passport = require('passport');

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/sigup', (req, res, next) => {
  res.render('sigup');
});
router.get('/quienesSomos', (req, res, next) => {
  res.render('quienesSomos');
});
router.post('/sigup', passport.authenticate('local-sigup', {
  successRedirect: '/profile',
  failureRedirect: '/sigup',
  failureFlash: true
})); 

router.get('/sigin', (req, res, next) => {
  res.render('sigin');
});


router.post('/sigin', passport.authenticate('local-sigin', {
  successRedirect: '/profile',
  failureRedirect: '/sigin',
  failureFlash: true
}));

router.get('/profile',isAuthenticated, (req, res, next) => {
  res.render('profile');
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});


function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }

  res.redirect('/')
}

module.exports = router;
