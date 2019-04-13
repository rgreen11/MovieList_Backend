const express = require('express');
const app = express()
const port = 3000;



// movies, genre, ratings, comments

app.post('/movies')

app.listen(port, ()=>{
    console.log('listening on port:', port)
})


