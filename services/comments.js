const {db} = require('./tablecommand')
const comments = {}


comments.create = (text, movies_id) => {
    const sql  = `
    INSERT INTO
    comments (text, movies_id)
    VALUES ($[text], $[movies_id])`
    return db.none(sql, {text, movies_id})
}

comments.read = () => {
    const sql = `SELECT comments.* FROM comments`;
    return db.any(sql)
    
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
    // this functions needs a place holder for each param
    // figure out a way to only update one value without having to insert other values
    // *** what you can do is ask the user if the remaining data is the same with YES / NO. If so call this api and fill in the remaining data. :)
}

comments.delete = (id) =>{
    const sql = `DELETE FROM comments WHERE id=$[id]`;
    return db.none(sql,{id})
}

module.exports = {comments}