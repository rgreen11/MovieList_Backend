const {comments} = require('../services/movies')


const createComment = (req, res)=>{
    const {text, movies_id} = req.body

    console.log(req)

    comments.create(text, movies_id)
    .then(() =>{
        res.json('movie created') 
    })
    .catch(err=>{
        res.json({error:err})
    })
    
}

const readComment = (req, res) => {
    comments.read()
        .then((data)=>{
        res.json(data)
      })
      .catch((error)=>{
        return error
      })
}

const updateComment = (req, res) =>{
  const {id, text, movies_id} = req.body
  comments.update(id, text, movies_id)
  .then(_=>{
    return  res.json({'comment': 'was updated'})
  })
  .catch((error)=>{
return res.json({err:error})
  })
}

const removeComment = (req, res) =>{
    const {id} = req.body;
    comments.delete(id)
    .then(_=>{
    return  res.json({'comment': 'was removed'})
      })
      .catch((error)=>{
    return res.json({err:error})
      })
}


module.exports = { createComment, readComment, updateComment, removeComment}