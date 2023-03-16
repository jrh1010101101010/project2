const express = require('express')
const router = express.Router()
const db = require('../db/index')
const ensureLoggedIn = require('../middleware/ensure_logged_in')

router.post('/search', ensureLoggedIn, (req,res)=>{
    
    const sql = `select * from users where username = $1;`
    //const sql = ``

    console.log(req.body)

    db.query(sql, [req.body.username], (err,dbRes)=>{
        
        if (err){
            console.log(err)
        } else{
            const users = dbRes.rows
            res.render('users', {users,users})
        }
    })
})

router.get('/userpage', ensureLoggedIn, (req,res) =>{

    console.log(req.session.userID)

    const sql = `select * from users
    inner join workout
    on workout.user_id = users.id
    where users.id = $1;`
    db.query(sql, [req.session.userID], (err, dbres) =>{
        if (err){
            console.log(err)
        } else{
            console.log(dbres.rows)
            const users = dbres.rows
            res.render('logged_in_user', {users: users})
        }
    })
    
})


module.exports = router
