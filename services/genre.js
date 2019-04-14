const {db} = require('./tablecommand')
const genre = {}


genre.create = (name) => {
    const sql  = `
    INSERT INTO
    genre (name)
    VALUES ($[name]])`
    return db.none(sql, {name})
}

genre.read = () => {
    const sql = `SELECT genre.* FROM genre`;
    return db.any(sql)
    
}

genre.update = (id,name) => {
    const sql = `
    UPDATE genre SET
    name=$[name],
    genre_id=$[genre_id]
    WHERE 
    id=$[id]`;

    return db.none(sql,{id, name})
}

genre.delete = (id) =>{
    const sql = `DELETE FROM genre WHERE id=$[id]`;
    return db.none(sql,{id})
}

module.exports = {genre}