
const { Pool } = require('pg')

const db = new Pool ({
    database: 'collectiveworkout'
})

module.exports = db  