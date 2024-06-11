CREATE DATABASE my_bands;
USE my_bands;
CREATE TABLE bands(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);
CREATE TABLE albums(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    release_year INT NOT NULL,
    band_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (band_id) REFERENCES bands(id)
);




INSERT INTO bands(name) VALUES('Iron Maiden');
INSERT INTO bands(name) VALUES("Guns N' Roses"), ('Metallica'), ('Slipknot');

SELECT * from bands;
SELECT * from bands LIMIT 2; -- returns first two bands
SELECT name from bands; -- selects only the name row
SELECT id AS "ID", name AS "Band Names" FROM bands;
SELECT * from bands ORDER BY name;

INSERT INTO albums(name, release_year, band_id) VALUES ('The Number of the Beast', 1985, 1), 
                                                       ('Power Slave', 1984, 1),
                                                       ('Nightmare', 2018, 2),
                                                       ('Nightmare', 2010, 3),
                                                       ('Test Album', NULL, 3);

SELECT * FROM albums WHERE release_year="1985"
SELECT DISTINCT name FROM albums;
UPDATE albums SET release_year=1982 WHERE id=1;

SELECT * FROM albums WHERE release_year<2000;

SELECT * FROM albums WHERE name LIKE '%er%'; -- Prints The Number of the Best    

SELECT * FROM albums WHERE release_year=1982 OR band_id=4; -- Similar for AND too!!

SELECT * FROM albums WHERE release_year BETWEEN 1890 AND 2000;

DELETE FROM albums WHERE release_year=4;

SELECT * FROM bands JOIN albums ON bands.id=albums.band_id;

SELECT * FROM bands LEFT JOIN albums ON bands.id=albums.band_id; --Takes everything from the Left side of the table

SELECT band_id, COUNT(band_id) FROM albums GROUP BY band_id;

SELECT bands.name, COUNT(albums.band_id) FROM bands LEFT JOIN albums on bands.id=albums.band_id GROUP BY bands.id;