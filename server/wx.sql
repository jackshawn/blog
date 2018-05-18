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

 Date: 05/18/2018 17:28:23 PM
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
  `time` datetime NOT NULL,
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
--  Table structure for `photo`
-- ----------------------------
DROP TABLE IF EXISTS `photo`;
CREATE TABLE `photo` (
  `picture` varchar(255) DEFAULT '',
  `video` varchar(255) DEFAULT NULL,
  `time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `title` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `photo`
-- ----------------------------
BEGIN;
INSERT INTO `photo` VALUES (null, null, '2018-05-15 14:30:41', 'test', null, null, '1'), (null, null, '2018-05-14 14:34:42', 'qwe', null, null, '2'), (null, null, '2018-05-14 14:35:45', 'qwe', null, null, '3'), (null, null, '2018-05-13 14:36:10', 'sdasd', null, null, '4');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
