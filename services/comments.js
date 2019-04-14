const {db} = require('./tablecommand')
const comments = {}


comments.create = (text, movies_id) => {
    const sql  = `
    INSERT INTO
    comments (text, movies_id)
    VALUES ($[text], $[movies_id])`
    return db.none(sql, {text, movies_id})
}

comments.read = (id) => {
    const sql = `SELECT * FROM comments WHERE movies_id = $[id]`;
    return db.any(sql,{id})
    
}

comments.update = (id,texts, movies_id) => {
    const sql = `
    UPDATE comments SET
    texts=$[texts],
    movies_id=$[movies_id],
    comments_id=$[comments_id]
    WHERE 
    id=$[id]`;

    return db.none(sql,{id, texts, movies_id})
}

comments.delete = (id) =>{
    const sql = `DELETE FROM comments WHERE id=$[id]`;
    return db.none(sql,{id})
}

module.exports = {comments}