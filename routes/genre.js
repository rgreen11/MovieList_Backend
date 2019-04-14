const {genre} = require('../services/movies')


const createGenre = (req, res)=>{
    const {name} = req.body

    console.log(req)

    genre.create(name)
    .then(() =>{
        res.json('rating created') 
    })
    .catch(err=>{
        res.json({error:err})
    })
    
}

const readGenre = (req, res) => {
    genre.read()
        .then((data)=>{
        res.json(data)
      })
      .catch((error)=>{
        return error
      })
}

const updateGenre = (req, res) =>{
  const {id,name} = req.body
  genre.update(id,name)
  .then(_=>{
    return  res.json({'genre': 'was updated'})
  })
  .catch((error)=>{
return res.json({err:error})
  })
}

const removeGenre = (req, res) =>{
    const {id} = req.body;
    genre.delete(id)
    .then(_=>{
    return  res.json({'genre': 'was removed'})
      })
      .catch((error)=>{
    return res.json({err:error})
      })
}


module.exports = { createGenre, readGenre, updateGenre, removeGenre}