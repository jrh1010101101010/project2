const express = require('express')
const router = express.Router()
const db = require('../db/index')

router.get('/search', (req,res)=>{
    const {username} = req.body
    const sql = `select * from users where username = $1;`

    console.log(username)

    db.query(sql, [username], (err,dbRes)=>{
        console.log(dbRes.rows)
        if (err){
            console.log(err)
        } else{
            const users = dbRes.rows
            res.render('users', {users: users})
        }
    })
})

router.get('/userpage')


module.exports = router