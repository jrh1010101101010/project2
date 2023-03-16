const express = require('express')
const router = express.Router()
const db = require('../db/index')
const bcrypt = require ('bcrypt')

router.get('/signup', (req,res) =>{
    res.render('signup')
})

router.post('/signup', (req,res) =>{
    const {username, password, passwordConfirmation} = req.body

    if (password !== passwordConfirmation){
        res.redirect('signup')
    }

    bcrypt.genSalt(10, (err, salt) =>{
        bcrypt.hash(password, salt, (err,digestedPassword) =>{
            const sql = `insert into users (username, password_digest) values ($1, $2);`

            db.query(sql, [username, digestedPassword], (err, dbRes) =>{
                if (err){
                    console.log(err)
                    res.redirect('/singup')
                } else{
                    req.session.userID = dbRes.rows[0]
                    res.redirect('/')
                }
            })
        })
    })
})

router.get('/userpage/:id', (req,res) =>{

    const sql = `select * from users
    inner join workout
    On workout.user_id = users.id;`
    db.query(sql, (err, dbRes) =>{

        const workout = dbRes.rows
        //const username =
        console.log(workout[1].username)
        res.render ('userpage', {workout: workout})
    })

    //res.render('userpage')
})

module.exports = router