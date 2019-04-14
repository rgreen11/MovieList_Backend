DROP DATABASE IF EXISTS movielist;
CREATE DATABASE movielist;

\c movielist; 

-- Having a tough time with creating sql, 
-- syntax
-- connect table with foreign key


CREATE TABLE genre (
    id SERIAL PRIMARY KEY,
    names VARCHAR NOT NULL
);

CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL,
    genre_id INT REFERENCES genre(id)
    ON DELETE CASCADE,
    img_url VARCHAR NOT NULL
);



CREATE TABLE ratings (
    id SERIAL PRIMARY KEY,
    stars INT NOT NULL,
    movies_id INT REFERENCES movies(id)
    ON DELETE CASCADE
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    texts VARCHAR NOT NULL,
    movies_id INT REFERENCES movies(id)
    ON DELETE CASCADE
);



INSERT INTO genre (names) VALUES 
('Action'),
('Fantasy'),
('Adventure'),
('Horror'),
('Comedy');

INSERT INTO movies (title, genre_id, img_url) VALUES 
('Black Panther', 1, 'https://prodimage.images-bn.com/pimages/9781302506964_p0_v1_s550x406.jpg'),
('Captain Marvel', 2, 'https://lumiere-a.akamaihd.net/v1/images/p_captainmarvel_characterposter_captainmarvel_ddt-17547_f5799718.jpeg?region=0,0,300,450'),
('Spider-Man: Into the Spider-Verse', 3, 'https://static.slickdealscdn.com/attachment/9/3/2/2/6/7/5/7913083.attach'),
('Aquaman', 4, 'https://pbs.twimg.com/media/Dsdlbj3U4AAJoO7.jpg'),
('Avengers: Endgame', 5, 'http://www.gstatic.com/tv/thumb/movieposters/15366809/p15366809_p_v8_af.jpg'),
('Us', 4, 'https://m.media-amazon.com/images/M/MV5BODUyODM0NjYyNF5BMl5BanBnXkFtZTgwNjAwMDU5NjM@._V1_SY1000_SX640_AL_.jpg'),
('Ant-Man and the Wasp', 1, 'http://www.gstatic.com/tv/thumb/v22vodart/13798222/p13798222_v_v8_ap.jpg'),
('The Matrix', 5, 'http://www.gstatic.com/tv/thumb/v22vodart/22804/p22804_v_v8_as.jpg'),
('Shazam!', 5, 'https://pbs.twimg.com/media/D1Z7df1VAAAbL7z.jpg');

INSERT INTO ratings (stars, movies_id) VALUES 
(5, 1),
(5, 1),
(5, 2),
(5, 2),
(5, 3),
(5, 3),
(5, 4),
(5, 4),
(5, 5),
(5, 5),
(5, 6),
(5, 6),
(5, 7),
(5, 7),
(5, 8),
(5, 8),
(5, 9),
(5, 9);


INSERT INTO comments (texts, movies_id) VALUES 
('lol', 1),
('lol', 9),
('lol', 8),
('lol', 7),
('lol', 6),
('lol', 5),
('lol', 4),
('lol', 3),
('lol', 2);
