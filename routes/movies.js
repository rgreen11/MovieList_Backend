const {movies} = require('../services/movies')


const createMovies = (req, res)=>{
    const {title, genre_id, img_url} = req.body

    movies.create(title, genre_id, img_url)
    .then(() =>{
        res.json('movie created') 
    })
    .catch(err=>{
        res.json({error:err})
    })
    
}

const readMovies = (req, res) => {
  movies.read()
        .then((data)=>{
        res.json(data)
      })
      .catch((error)=>{
        return error
      })
}

const updateMovies = (req, res) =>{
  const {id, title, genre_id, img_url} = req.body
  movies.update(id, title, genre_id, img_url)
  .then(_=>{
    return  res.json({'movie': 'was updated'})
  })
  .catch((error)=>{
return res.json({err:error})
  })
}

const removeMovies = (req, res) =>{
    const {id} = req.body;
    movies.delete(id)
    .then(_=>{
    return  res.json({'movie': 'was removed'})
      })
      .catch((error)=>{
    return res.json({err:error})
      })
}


module.exports = {createMovies, readMovies, updateMovies, removeMovies}