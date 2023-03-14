const express = require('express')
const router = express.Router()
const db = require('../db/index')
const ensureLoggedIn = require('../middleware/ensure_logged_in')

// db 
// ensureloggedin function

router.get('/', (req,res) =>{

    const sql = `Select * from workout;`
    db.query(sql, (err, dbRes) =>{
        const workout = dbRes.rows
        res.render ('home', {workout: workout})
    })
    
})

router.get('/workout/:id', ensureLoggedIn, (req, res) =>{
    const sql = `select * from workout where id = $1;`

    db.query(sql, [req.params.id], (err, dbRes) =>{
        console.log(dbRes)
        if (err){
            console.log(err)
        } else {
            
            const workout = dbRes.rows[0]
            
            res.render('workout_details', {workout})
        }   
    })
})


module.exports = router