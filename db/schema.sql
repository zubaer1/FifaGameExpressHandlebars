

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Create the database seinfeld and specified it for use.
DROP SCHEMA IF EXISTS `fifaGame`;
CREATE SCHEMA `fifaGame`;
USE `fifaGame`;

--
-- Table structure for table `locations`
--

DROP TABLE IF EXISTS `PlayerNames`;
CREATE TABLE `PlayerNames` (
  `id` int(11) DEFAULT NULL,
  `Name` text,
  `url` text
);

--
-- Get data from CSV file and import into `locations` table
--

LOAD DATA LOCAL INFILE 'PlayerNames.csv'
INTO TABLE locations 
FIELDS TERMINATED BY ','
    ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(id, Name, url);