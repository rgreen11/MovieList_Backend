const {db} = require('./tablecommand')
const ratings = {}

ratings.create = (stars, movies_id) => {
    const sql  = `
    INSERT INTO
    ratings (stars, movies_id)
    VALUES ($[stars], $[movies_id])`
    return db.none(sql, {stars, movies_id})
}

ratings.read = () => {
    const sql = `SELECT ratings.* FROM ratings`;
    return db.any(sql)
    
}

ratings.update = (id, stars, movies_id, ratings_id) => {
    const sql = `
    UPDATE movies SET
    stars=$[stars],
    movies_id=$[movies_id],
    ratings_id=$[ratings_id]
    WHERE 
    id=$[id]`;

    return db.none(sql,{id, stars, movies_id, ratings_id})
}

ratings.delete = (id) =>{
    const sql = `DELETE FROM ratings WHERE id=$[id]`;
    return db.none(sql,{id})
}

module.exports = {ratings}