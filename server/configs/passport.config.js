const session = require("express-session")
const bcrypt = require("bcryptjs")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const flash = require("connect-flash")
const User = require('../models/user.model')
const FileStore = require('session-file-store')(session);
const uuid = require('uuid').v4

//Using passport.js for session storage and authentication
module.exports = app => {

    app.use(session({
        genid: (req) => {
            return uuid() // use UUIDs for session IDs
        },
        store: new FileStore(),
        secret: "eLearning",
        resave: false,
        saveUninitialized: true
    }))

    passport.serializeUser((user, done) => done(null, user._id))

    //Send user object.
    passport.deserializeUser((id, done) => {
        User.findById(id)
            .then(theUser => done(null, theUser))
            .catch(err => done(err))
    })

    app.use(flash())

    passport.use(new LocalStrategy({ passReqToCallback: true }, (req, username, password, done) => {
        User.findOne({ username })
            .then(user => {
                if (!user) {
                    return done(null, false, { message: "Unregistered username" })
                }
                if (!bcrypt.compareSync(password, user.password)) {
                    return done(null, false, { message: "Incorrect password" })
                }
                return done(null, user)
            })
            //.catch(err => res.status(500).json(err))
            .catch(err => done(err))
    }))

    app.use(passport.initialize())
    app.use(passport.session())
}