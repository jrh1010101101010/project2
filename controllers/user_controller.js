const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const db = require('../db/index')


router.get('/login', (req,res) => {
    res.render('login')
})

router.post('/logginIn', (req,res)=>{
    
})

module.exports = router