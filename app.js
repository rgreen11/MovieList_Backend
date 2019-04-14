const express = require('express');
const bodyParser = require('body-parser');
const {createMovies,readMovies,updateMovies, removeMovies} = require('./routes/movies');
const {createGenre, readGenre, updateGenre, removeGenre} =require('./routes/genre')
const {createRating, readRating, updateRating, removeRating} =require('./routes/ratings')
const {createComment, readComment, updateComment, removeComment} = require('./routes/comments')
const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());


app.post('/movie/create', createMovies);
app.get('/movies', readMovies);
app.put('/movie/update', updateMovies);
app.delete('/movie/delete', removeMovies);

app.post('/genre/create',createGenre);
app.get('/movies/byGenre', readGenre);
app.put('/genre/update', updateGenre);
app.delete('/genre/delete',removeGenre);

app.post('/rating/create', createRating);
app.get('/rating/search',  readRating);
app.put('/rating/update',  updateRating);
app.delete('/rating/delete',  removeRating);

app.post('/comment/create', createComment);
app.get('/comments/search',  readComment);
app.put('/comment/update', updateComment);
app.delete('/comment/delete',  removeComment);

module.exports = {app}