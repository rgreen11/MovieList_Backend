const {db} = require('./tablecommand')
const movies = {}


movies.create = (title, genre_id, img_url) => {
    const sql  = `
    INSERT INTO
    movies (title, genre_id, img_url)
    VALUES ($[title], $[genre_id], $[img_url])`
    return db.none(sql, {title, genre_id, img_url})
}

movies.read = () => {
    const sql = `
    SELECT movies.*, genre.id as genre_id 
    FROM movies 
    LEFT JOIN genre ON movies.genre_id = genre.id`;
    return db.any(sql)
    
}

movies.update = (id,title, genre_id, img_url) => {
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

movies.delete = (id) =>{
    const sql = `DELETE FROM movies WHERE id=$[id]`;
    return db.none(sql,{id})
}

module.exports = {movies}