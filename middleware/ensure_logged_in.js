function ensureLoggedIn (req,res, next){
    if (req.session.userID){
        return next()
    } else{
        res.redirect('/login')
    }
}

module.exports = ensureLoggedIn