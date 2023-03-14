// boilerplate 
const express = require('express')
const app = express ()
const port = 3000


// controllers / other
const workoutControllers = require ('./controllers/workout_controllers')
const expressLayouts = require('express-ejs-layouts')


app.set('view engine', 'ejs')

app.use(expressLayouts)


app.get('/', (req,res) =>{
    res.render ('home')
})



//app.use('/', workoutControllers)


app.listen(port, () => {
    console.log(`listening`)
})