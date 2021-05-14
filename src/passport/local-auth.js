const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');


passport.serializeUser((user, done)=>{
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
  });

passport.use('local-sigup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async(req, email, password, done)=>{
    const user = await User.findOne({'email': email})
    console.log(user)
    if(user) {
      return done(null, false, req.flash('signupMessage', 'El correo ya existe.'));
    } else {
      const newUser = new User();
      newUser.email = email;
      newUser.password = newUser.encryptPassword(password);
    console.log(newUser)
      await newUser.save();
      done(null, newUser);
    }
  }));

  passport.use('local-sigin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, async (req, email, password, done) => {
    const user = await User.findOne({email: email});
    if(!user) {
      return done(null, false, req.flash('signinMessage', 'Correo o contraseña invalido'));
    }
    if(!user.comparePassword(password)) {
      return done(null, false, req.flash('signinMessage', 'Correo o contraseña invalido'));
    }
    return done(null, user);
  }));