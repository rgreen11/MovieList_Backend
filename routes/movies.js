const {movies} = require('../services/movies')


const createMovies = (req, res)=>{
    const {title, genre_id, img_url} = req.body

    console.log(req)

    movielist.create(title, genre_id, img_url)
    .then(() =>{
        res.json('movie created') 
    })
    .catch(err=>{
        res.json({error:err})
    })
    
}

const readMovies = (req, res) => {
    movielist.read()
        .then((data)=>{
        res.json(data)
      })
      .catch((error)=>{
        return error
      })
}

const updateMovies = (req, res) =>{
  const {id, title, genre_id, img_url} = req.body
  movielist.update(id, title, genre_id, img_url)
  .then(_=>{
    return  res.json({'movie': 'was updated'})
  })
  .catch((error)=>{
return res.json({err:error})
  })
}

const removeMovies = (req, res) =>{
    const {id} = req.body;
    movielist.delete(id)
    .then(_=>{
    return  res.json({'movie': 'was removed'})
      })
      .catch((error)=>{
    return res.json({err:error})
      })
}


module.exports = { createMovies, readMovies, updateMovies, removeMovies}