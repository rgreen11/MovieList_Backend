const {db} = require('./tablecommand')
const movielist = {}


movielist.create = (title, genre_id, img_url) => {
    const sql  = `
    INSERT INTO
    movies (title, genre_id, img_url)
    VALUES ($[title], $[genre_id], $[img_url])`
    return db.none(sql, {title, genre_id, img_url})
}

movielist.read = () => {
    const sql = `SELECT movies.* FROM movies`;
    return db.any(sql)
    
}

movielist.update = (id,title, genre_id, img_url) => {
    const sql = `
    UPDATE movies SET
    title=$[title],
    genre_id=$[genre_id],
    img_url=$[img_url],
    movies_id=$[movies_id]
    WHERE 
    id=$[id]`;

    return db.none(sql,{id, title, genre_id, img_url})
}

movielist.delete = (id) =>{
    const sql = `DELETE FROM movies WHERE id=$[id]`;
    return db.none(sql,{id})
}

module.exports = {movielist}