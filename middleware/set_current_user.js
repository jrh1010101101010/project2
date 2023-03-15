
const db = require('../db/index')

function setCurrentUser(req,res){
    const { userID } = req.session

    res.locals.currentUser = {}
        const sql = `SELECT id, username from users WHERE id = '${userID}';`
        db.query(sql, (err, dbRes) =>{
            if (err){
                console.log('set current user error',err)
            } else {
                res.locals.currentUser = dbRes.rows[0]
                console.log('set current user success',res.locals.currentUser)
                
            }
        })
   
}

module.exports = setCurrentUser