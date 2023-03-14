const express = require('express')
const router = express.Router()

// db 
// ensureloggedin function

router.get('/', (req,res) =>{
    res.render ('home')
})

module.exports = router