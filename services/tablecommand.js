const pgp = require('pg-promise')({});
const db = pgp("postgres://localhost/movielist");

module.exports = {
    db
}