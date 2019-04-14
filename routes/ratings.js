const {ratings} = require('../services/ratings')


const createRating = (req, res)=>{
    const {stars, movies_id} = req.body

    console.log(req)

    ratings.create(stars, movies_id)
    .then(() =>{
        res.json('rating created') 
    })
    .catch(err=>{
        res.json({error:err})
    })
    
}

const readRating = (req, res) => {
    ratings.read()
        .then((data)=>{
        res.json(data)
      })
      .catch((error)=>{
        return error
      })
}

const updateRating = (req, res) =>{
  const {id, stars, movies_id, ratings_id} = req.body
  ratings.update(id, stars, movies_id, ratings_id)
  .then(_=>{
    return  res.json({'ratings': 'was updated'})
  })
  .catch((error)=>{
return res.json({err:error})
  })
}

const removeRating = (req, res) =>{
    const {id} = req.body;
    ratings.delete(id)
    .then(_=>{
    return  res.json({'ratings': 'was removed'})
      })
      .catch((error)=>{
    return res.json({err:error})
      })
}


module.exports = { createRating, readRating, updateRating, removeRating}