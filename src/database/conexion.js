const { Pool } = require("pg");
//conecion a la base de datos online con usuario creado
const likemeDB = new Pool({
    host: 'postgresql-mathiasdb.alwaysdata.net',
    user: 'mathiasdb_admin',
    password: '18282323',
    database: 'mathiasdb_likeme',
    port: 5432,
    allowExitOnIdle: true
})
module.exports = likemeDB;