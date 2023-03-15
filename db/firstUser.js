
const {Client} = require ('pg')
const bcrypt = require ('bcrypt')

const db = new Client ({
    database: 'collectiveworkout'
})

db.connect()

const username = 'jrh'
const plainTextPassword = 'hannah'
const bio = 'lover of all things sweaty'


bcrypt.genSalt(10, (err,salt) => {
    bcrypt.hash(plainTextPassword, salt, (err, digestedPassword) =>{
        const sql = ` INSERT INTO users (username, bio, password_digest) VALUES ('${username}', '${bio}}', '${digestedPassword}');`

        db.query (sql, (err, dbRes) =>{
            console.log(err)
            db.end()
        })
    })
}) 