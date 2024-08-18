SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for gp_article_comment
-- ----------------------------
DROP TABLE IF EXISTS `gp_article_comment`;
CREATE TABLE `gp_article_comment` (
  `id` bigint(18) NOT NULL AUTO_INCREMENT COMMENT '评论表ID',
  `reply_id` bigint(18) DEFAULT '0' COMMENT '回复的评论ID,有用户表的时候为用户ID',
  `name` char(90) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '用户名',
  `email` char(80) DEFAULT NULL COMMENT '邮箱',
  `website` varchar(80) DEFAULT NULL COMMENT '网址',
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '评论内容',
  `topic_id` char(18) DEFAULT NULL COMMENT '评论所属的文章或主题ID',
  `topic_type` char(2) DEFAULT NULL COMMENT '评论的主题类型',
  `create_time` datetime DEFAULT NULL COMMENT '评论时间',
  `user_id` char(18) DEFAULT NULL COMMENT '评论的用户ID,在文章评论表中为1，代表博主评论留言',
  `parent_id` bigint(18) DEFAULT '0' COMMENT '判断消息是否属于第一层级',
  `reply_name` char(90) DEFAULT NULL COMMENT '回复评论的用户名',
  `like_count` mediumint(11) DEFAULT '0' COMMENT '点赞数',
  PRIMARY KEY (`id`),
  UNIQUE KEY `Idindex` (`id`) USING BTREE COMMENT '主键索引',
  KEY `TopicIdIndex` (`topic_id`) USING BTREE COMMENT '评论所属文章ID索引'
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8 COMMENT='用户评论回复留言表';

SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO `maike`.`gp_user_comment`(`id`, `reply_id`, `name`, `email`, `website`, `content`, `topic_id`, `topic_type`, `create_time`, `user_id`, `parent_id`, `reply_name`, `like_count`) VALUES (1, 1, 'Plus', NULL, NULL, '赞！👍', NULL, NULL, '2023-03-14 05:35:06', NULL, 1, 'Garry', NULL);
INSERT INTO `maike`.`gp_user_comment`(`id`, `reply_id`, `name`, `email`, `website`, `content`, `topic_id`, `topic_type`, `create_time`, `user_id`, `parent_id`, `reply_name`, `like_count`) VALUES (2, 0, '孙燕姿', NULL, NULL, '我有一首遇见', NULL, NULL, '2023-03-14 06:36:00', NULL, 0, NULL, NULL);
INSERT INTO `maike`.`gp_user_comment`(`id`, `reply_id`, `name`, `email`, `website`, `content`, `topic_id`, `topic_type`, `create_time`, `user_id`, `parent_id`, `reply_name`, `like_count`) VALUES (3, 5, '梁静茹', '', NULL, '我有一首勇气', NULL, NULL, '2023-03-14 08:00:26', NULL, 5, '孙燕姿', NULL);
INSERT INTO `maike`.`gp_user_comment`(`id`, `reply_id`, `name`, `email`, `website`, `content`, `topic_id`, `topic_type`, `create_time`, `user_id`, `parent_id`, `reply_name`, `like_count`) VALUES (4, 1, 'Plus', '', NULL, '嗯！请问你叫什么名字？', NULL, NULL, '2023-03-14 08:08:58', NULL, 1, 'Garry', NULL);
INSERT INTO `maike`.`gp_user_comment`(`id`, `reply_id`, `name`, `email`, `website`, `content`, `topic_id`, `topic_type`, `create_time`, `user_id`, `parent_id`, `reply_name`, `like_count`) VALUES (5, 6, '蔡依林', '', NULL, '我有一首日不落', NULL, NULL, '2023-03-14 08:10:04', NULL, 5, '梁静茹', NULL);
INSERT INTO `maike`.`gp_user_comment`(`id`, `reply_id`, `name`, `email`, `website`, `content`, `topic_id`, `topic_type`, `create_time`, `user_id`, `parent_id`, `reply_name`, `like_count`) VALUES (6, 0, '吴青峰', NULL, NULL, '<p>我的歌很好听哦！</p>', NULL, NULL, '2023-03-14 09:27:05', NULL, 0, NULL, NULL);
INSERT INTO `maike`.`gp_user_comment`(`id`, `reply_id`, `name`, `email`, `website`, `content`, `topic_id`, `topic_type`, `create_time`, `user_id`, `parent_id`, `reply_name`, `like_count`) VALUES (7, 10, '陈嘉桦', '', NULL, '赞同，我们也合作了一些歌曲！', NULL, NULL, '2023-03-14 09:30:16', NULL, 9, '吴青峰', NULL);
INSERT INTO `maike`.`gp_user_comment`(`id`, `reply_id`, `name`, `email`, `website`, `content`, `topic_id`, `topic_type`, `create_time`, `user_id`, `parent_id`, `reply_name`, `like_count`) VALUES (8, 0, '罗大佑', NULL, NULL, '<p>我是罗大佑！😃😀</p>', NULL, NULL, '2023-03-14 23:01:02', NULL, 0, NULL, NULL);
INSERT INTO `maike`.`gp_user_comment`(`id`, `reply_id`, `name`, `email`, `website`, `content`, `topic_id`, `topic_type`, `create_time`, `user_id`, `parent_id`, `reply_name`, `like_count`) VALUES (9, 0, '李宗盛', NULL, NULL, '<p>我是李宗盛！😀</p>', NULL, NULL, '2023-03-14 23:03:57', NULL, 0, NULL, NULL);
INSERT INTO `maike`.`gp_user_comment`(`id`, `reply_id`, `name`, `email`, `website`, `content`, `topic_id`, `topic_type`, `create_time`, `user_id`, `parent_id`, `reply_name`, `like_count`) VALUES (10, 0, '周华健', NULL, NULL, '<p>我是周华健！</p>', NULL, NULL, '2023-03-14 23:07:07', NULL, 0, NULL, NULL);
INSERT INTO `maike`.`gp_user_comment`(`id`, `reply_id`, `name`, `email`, `website`, `content`, `topic_id`, `topic_type`, `create_time`, `user_id`, `parent_id`, `reply_name`, `like_count`) VALUES (11, 0, '陶喆', NULL, NULL, '<p>你好！我是陶喆！我是一个音乐人！</p>', NULL, NULL, '2023-03-14 23:10:08', NULL, 0, NULL, NULL);
INSERT INTO `maike`.`gp_user_comment`(`id`, `reply_id`, `name`, `email`, `website`, `content`, `topic_id`, `topic_type`, `create_time`, `user_id`, `parent_id`, `reply_name`, `like_count`) VALUES (12, 0, '王力宏', NULL, NULL, '<p>我是王力宏！</p>', NULL, NULL, '2023-03-14 23:12:13', NULL, 0, NULL, NULL);
INSERT INTO `maike`.`gp_user_comment`(`id`, `reply_id`, `name`, `email`, `website`, `content`, `topic_id`, `topic_type`, `create_time`, `user_id`, `parent_id`, `reply_name`, `like_count`) VALUES (13, 0, '伍佰', NULL, NULL, '<p>我是伍佰，挪威的森林是我唱的一首歌曲！</p>', NULL, NULL, '2023-03-14 23:12:52', NULL, 0, NULL, NULL);
INSERT INTO `maike`.`gp_user_comment`(`id`, `reply_id`, `name`, `email`, `website`, `content`, `topic_id`, `topic_type`, `create_time`, `user_id`, `parent_id`, `reply_name`, `like_count`) VALUES (14, 0, '周杰伦', NULL, NULL, '你好！我是周杰伦，我的新歌上架了，请多多支持！', NULL, NULL, '2023-03-14 23:13:27', NULL, 0, NULL, NULL);
INSERT INTO `maike`.`gp_user_comment`(`id`, `reply_id`, `name`, `email`, `website`, `content`, `topic_id`, `topic_type`, `create_time`, `user_id`, `parent_id`, `reply_name`, `like_count`) VALUES (15, 0, 'gasey', NULL, NULL, '我是一个寂寞的人，总是在深夜里独自伤神', NULL, NULL, '2023-03-15 04:15:11', NULL, 0, NULL, NULL);
INSERT INTO `maike`.`gp_user_comment`(`id`, `reply_id`, `name`, `email`, `website`, `content`, `topic_id`, `topic_type`, `create_time`, `user_id`, `parent_id`, `reply_name`, `like_count`) VALUES (16, 20, '周杰伦', NULL, NULL, '我的新歌来了，也很好听哦！', NULL, NULL, '2023-03-15 04:25:04', NULL, 19, '一个听音乐的人', NULL);
INSERT INTO `maike`.`gp_user_comment`(`id`, `reply_id`, `name`, `email`, `website`, `content`, `topic_id`, `topic_type`, `create_time`, `user_id`, `parent_id`, `reply_name`, `like_count`) VALUES (17, 0, '画某某', NULL, NULL, '网站变灰代码，用于哀悼等活动在style样式表里加上\nhtml {\nfilter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);\n-webkit-filter: grayscale(100%);}就可以了', NULL, NULL, '2023-03-23 22:32:34', NULL, 0, NULL, 0);
INSERT INTO `maike`.`gp_user_comment`(`id`, `reply_id`, `name`, `email`, `website`, `content`, `topic_id`, `topic_type`, `create_time`, `user_id`, `parent_id`, `reply_name`, `like_count`) VALUES (18, 0, '路人甲', NULL, NULL, '可以的，写的不错，很全面！👍👍👍🐮🐮🐮🔥🔥🔥', '64', NULL, '2023-04-10 22:18:23', NULL, 0, NULL, 0);