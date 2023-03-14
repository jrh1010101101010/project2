// boilerplate 
const express = require('express')
const app = express ()
const port = 3000
const session = require('express-session')

// memorystore

// controllers / middleware
const workoutControllers = require ('./controllers/workout_controllers')
const userControllers = require('./controllers/user_controller')
const methodOverride = require ('./middleware/method_override')

// other middleware
app.set('view engine', 'ejs')
const expressLayouts = require('express-ejs-layouts')

app.use(express.urlencoded({extended: true}))
app.use (methodOverride)
app.use(expressLayouts)
app.use(session({
    secret: 'mistyrose',
    resave: false,
    saveUninitialized: true,
}))


app.use('/', workoutControllers)
app.use('/', userControllers)


app.listen(port, () => {
    console.log(`listening`)
})