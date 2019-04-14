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
    // this functions needs a place holder for each param
    // figure out a way to only update one value without having to insert other values
    // *** what you can do is ask the user if the remaining data is the same with YES / NO. If so call this api and fill in the remaining data. :)
}

movielist.delete = (id) =>{
    const sql = `DELETE FROM genre WHERE id=$[id]`;
    return db.none(sql,{id})
}

module.exports = {movielist}