CREATE DATABASE IF NOT EXISTS `taskpane`;

USE `taskpane`;

CREATE TABLE IF NOT EXISTS `tasks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `taskName` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `priority` INT NOT NULL CHECK (`priority` BETWEEN 1 AND 4),
  `status` INT NOT NULL CHECK (`status` BETWEEN 1 AND 4),
  `dueDate` datetime NOT NULL,
  `finishDate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
);