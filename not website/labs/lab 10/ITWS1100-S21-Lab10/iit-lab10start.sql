-- create the tables for our movies

CREATE TABLE `movies` (
 `movieid` int(10) unsigned NOT NULL AUTO_INCREMENT,
 `title` varchar(100) NOT NULL,
 `year` char(4) DEFAULT NULL,
 PRIMARY KEY (`movieid`)
);
-- added for part 2
CREATE TABLE Actors ( 
`actorid` int(10) unsigned NOT NULL AUTO_INCREMENT,
`last_name` varchar(60) NOT NULL, 
`first_names` varchar(60) NOT NULL,
`dob` char(10) NOT NULL,
PRIMARY KEY (`actorid`)
);
---for creating the movie actor relationship things
CREATE TABLE `movie_actors` (
`movieid` int(10) unsigned NOT NULL AUTO_INCREMENT,
`actorid` int(10) unsigned NOT NULL,
PRIMARY KEY (`movieid`)
);
---part 6
insert into `movie_actors` VALUES
(1, 13),
(2, 15),
(3, 14),
(4, 13);

---command used to create the relationship table
-- SELECT movies.title, actors.last_name, actors.first_names
	-- FROM movies, actors, movie_actors
	-- WHERE movie_actors.movieid = movies.movieid
		-- AND movie_actors.actorid = actors.actorid


---part 4
INSERT INTO Actors VALUES 
	(4, "Freeman", "Morgan", "1937-06-01"),
	(5, "Ono", "Daisuke", "1978-05-04"),
	(6, "Hanks", "Tom", "1956-07-09"),
	(7, "McAvoy", "James", "1979-04-21"),
	(8, "Pop", "Iggy", "1947-04-21");

---part 5
-- SELECT * FROM `Actors` WHERE dob >= 1960


-- insert data into the tables

-- INSERT INTO movies VALUES
--   (1, "Elizabeth", "1998"),
--   (2, "Elling", "2001"),
--   (3, "Oh Brother Where Art Thou?", "2000"),
--   (4, "The Lord of the Rings: The Fellowship of the Ring", "2001"),
--   (5, "Up in the Air", "2009");

