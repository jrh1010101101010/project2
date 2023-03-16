// boilerplate 
const express = require('express')
const app = express ()
const port = process.env.PORT || 3000
const session = require('express-session')
const upload = require('./middleware/upload')
const memorystore = require('memorystore')(session)

// memorystore

// middleware
const currentUser = require('./middleware/set_current_user')
const methodOverride = require('./middleware/method_override')
// controllers
const workoutControllers = require('./controllers/workout_controllers')
const userControllers = require('./controllers/user_controller')
const newUserController = require('./controllers/new_user_controller')
const searchController = require('./controllers/search_controllers')
const expressLayouts = require('express-ejs-layouts')

// using
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride)
app.use(expressLayouts)
app.use(session({
    cookie: {maxAge: 86400000},
    store: new memorystore({
        checkPeriod: 86400000
    }),
    secret: process.env.SESSION_SECRET||'mistyrose',
    resave: false,
    saveUninitialized: true,
}))

//console.log(user.id)
//app.use(currentUser)
//currentUser()

app.use('/', workoutControllers)
app.use('/', userControllers)
app.use('/', newUserController)
app.use('/', searchController)


app.listen(port, () => {
    console.log(`listening`)
})


/* 
    <!-- <% if (currentUser){%>
        <h4>logged in as <%= currentUser.username%></h4>
        <% }%> -->
*/