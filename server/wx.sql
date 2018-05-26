/*
 Navicat Premium Data Transfer

 Source Server         : wx
 Source Server Type    : MySQL
 Source Server Version : 50721
 Source Host           : localhost
 Source Database       : wx

 Target Server Type    : MySQL
 Target Server Version : 50721
 File Encoding         : utf-8

 Date: 05/26/2018 15:36:42 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `blogs`
-- ----------------------------
DROP TABLE IF EXISTS `blogs`;
CREATE TABLE `blogs` (
  `title` varchar(255) NOT NULL DEFAULT '',
  `content` text NOT NULL,
  `date` datetime NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `blogs`
-- ----------------------------
BEGIN;
INSERT INTO `blogs` VALUES ('qwdq', 'qwdqwdqwdqw', '2018-05-15 14:58:08', '1', ''), ('asdasd', 'asdasdasasasd', '2018-05-14 15:46:56', '2', '');
COMMIT;

-- ----------------------------
--  Table structure for `destinations`
-- ----------------------------
DROP TABLE IF EXISTS `destinations`;
CREATE TABLE `destinations` (
  `longitude` float DEFAULT NULL,
  `latitude` float DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `location` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
--  Table structure for `photos`
-- ----------------------------
DROP TABLE IF EXISTS `photos`;
CREATE TABLE `photos` (
  `picture` varchar(255) DEFAULT '',
  `video` varchar(255) DEFAULT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `title` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `photos`
-- ----------------------------
BEGIN;
INSERT INTO `photos` VALUES (null, null, '2018-05-15 14:30:41', 'test', null, 'life', '1'), (null, null, '2018-05-14 14:34:42', 'qwe', null, 'movie', '2'), (null, null, '2018-05-14 14:35:45', 'qwe', null, null, '3'), (null, null, '2018-05-13 14:36:10', 'sdasd', null, null, '4'), ('qwe', 'qwe', '2018-05-25 10:59:34', 'qwewe', null, 'life', '5'), ('', null, '2018-05-25 03:43:44', null, null, 'life', '6'), ('asd', '111', '0332-12-31 16:00:00', 'qwe', '222', 'hehe', '8'), ('asd', '111', '2018-05-04 00:00:00', 'qwe', '222', 'movie', '10');
COMMIT;

-- ----------------------------
--  Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `users`
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES ('admin', '123456', '0');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
