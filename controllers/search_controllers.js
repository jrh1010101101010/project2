const express = require('express')
const router = express.Router()
const db = require('../db/index')

router.get('/search', (req,res)=>{
    
    const sql = `select * from users where username = $1;`
    //const sql = ``

    console.log(req.body)

    db.query(sql, [req.body.username], (err,dbRes)=>{
        console.log(dbRes.rows)
        if (err){
            console.log(err)
        } else{
            const users = dbRes.rows
            res.render('users', {users,users})
        }
    })
})

router.get('/userpage')


module.exports = router

/*
<% for (ele of users){%>
        <%= users.username %>
    <% }%>
*/