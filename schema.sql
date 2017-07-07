/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Create the database seinfeld and specified it for use.
DROP SCHEMA IF EXISTS `fifagame`;
CREATE SCHEMA `fifagame`;
USE `fifaGame`;

--
-- Table structure for table `locations`
--

DROP TABLE IF EXISTS `PlayerNames`;
CREATE TABLE `PlayerNames` (
  `id` int(11) AUTO_INCREMENT,
  `Name` varchar(255),
  `url` text,
  PRIMARY KEY (id)
);

--
-- Get data from CSV file and import into `locations` table
--

LOAD DATA LOCAL INFILE 'PlayerNames.csv'
INTO TABLE `PlayerNames`
FIELDS TERMINATED BY ','
    ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(Name, url);




--
-- Table structure for table `locations`
--

DROP TABLE IF EXISTS `NationalNames`;
CREATE TABLE `NationalNames` (
  `id` int(11) AUTO_INCREMENT,
  `Name` varchar(255),
  `url` text,
  PRIMARY KEY (id)
);

--
-- Get data from CSV file and import into `locations` table
--

LOAD DATA LOCAL INFILE 'NationalNames.csv'
INTO TABLE `NationalNames`
FIELDS TERMINATED BY ','
    ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(Name, url);






--
-- Table structure for table `locations`
--

DROP TABLE IF EXISTS `ClubNames`;
CREATE TABLE `ClubNames` (
  `id` int(11) AUTO_INCREMENT,
  `Name` varchar(255),
  `url` text,
  PRIMARY KEY (id)
);

--
-- Get data from CSV file and import into `locations` table
--

LOAD DATA LOCAL INFILE 'ClubNames.csv'
INTO TABLE `ClubNames`
FIELDS TERMINATED BY ','
    ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(Name, url);