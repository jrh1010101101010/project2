const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const db = require('../db/index')
const setCurrentUser = require('../middleware/set_current_user')


router.get('/login', (req,res) => {
    res.render('login', {layout: 'layoutNoLogin'})
})

// set current user function user here
router.post('/login', (req,res)=>{
    //res.send('logging in ....')

    const {username, password} = req.body

    const sql = `select * from users where username = $1`

    db.query(sql, [username], (err, dbRes) =>{
        if (dbRes.rows.length === 0){
            res.render('login')
            return
        } 
        const user = dbRes.rows[0]
        
        bcrypt.compare(password, user.password_digest, (err, result)=>{
            if (result){
                req.session.userID = user.id
                setCurrentUser(req,res)
                res.redirect('/')
            } else {
                res.render('login')
            }
        })

    })

})

router.delete('/sessions', (req,res) =>{
    req.session.destroy(() => {
        res.redirect('/')
    })
})

module.exports = router