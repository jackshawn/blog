const config = {
  // 数据库连接配置
  db: {
    database: 'wx',
    username: 'root',
    password: '123',
    host: 'localhost',
    port: 3306
  },
  // session 配置
  sessionConfig: {
    key: 'session-id',
    cookie: {
      domain: 'localhost',
      path: '/',
      maxAge: 1000 * 60 * 60,
      httpOnly: true,
      overwrite: false
    }
  },
  // TinyPNG 图片压缩配置; https://tinypng.com/developers/reference/nodejs
  imgCompress: {
    enable: false,
    key: ''
  }
}

module.exports = config;
