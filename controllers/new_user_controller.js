const express = require('express')
const router = express.Router()
const db = require('../db/index')
const bcrypt = require ('bcrypt')

router.get('/signup', (req,res) =>{
    res.render('signup')
})

router.post('/signup', (req,res) =>{
    const {username, password, passwordConfirmation} = req.body

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

module.exports = router