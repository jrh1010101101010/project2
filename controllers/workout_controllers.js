const express = require('express')
const router = express.Router()
const db = require('../db/index')
const ensureLoggedIn = require('../middleware/ensure_logged_in')

// ensureloggedin function

router.get('/', (req,res) =>{

    const sql = `Select * from workout;`
    db.query(sql, (err, dbRes) =>{
        const workout = dbRes.rows
        res.render ('home', {workout: workout})
    })
    
})

// share new
router.get('/workout/new', (req,res) =>{
    res.render('new_workout')
})
// workout details
router.get('/workout/:id',  (req, res) =>{
    const sql = `select * from workout where id = $1;`

    db.query(sql, [req.params.id], (err, dbRes) =>{
        
        if (err){
            console.log(err)
        } else {
            
            const workout = dbRes.rows[0]
            
            res.render('workout_details', {workout})
        }   
    })
})

// routing for new dishes
router.post('/workout', (req,res) =>{
    const sql = `insert into workout (title, description, set) values ($1, $2, $3);`
    db.query(sql, [req.body.title, req.body.description, req.body.sets],(err,dbres)=>{
        res.redirect('/')
    })

})

// editing function 
router.get('/workout/:id/edit', (req,res) =>{
    const sql = `select * from workout where id = $1;`


    db.query(sql, [req.params.id], (err, dbRes) =>{
        
        if (err){
            console.log(err)
        } else {
            
            const workout = dbRes.rows[0]
            
            res.render('edit_workout', {workout})
        }   
    })
})
// route to update the db and then send back to workout details
router.put ('/workout/:id', (req,res) =>{
    const sql = `UPDATE workout SET title = $1, description = $2, set = $3 WHERE id = $4;`
    console.log(req.body)
    db.query(sql, 
        [req.body.title, req.body.description, req.body.set, req.params.id], 
        (err, dbRes) =>{
        
        console.log(dbRes.rows)
        if (err){
            console.log(err)
        } else {
            res.redirect(`/workout/${req.params.id}`)
        }
    })
})

// delete function
router.delete('/workout/:id', (req,res) =>{
    const sql = `delete from workout where id = $1`
    db.query (sql, [req.params.id], (err,dbRes) =>{
        res.redirect('/')
    })
})


module.exports = router