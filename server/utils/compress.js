const tinify = require("tinify");
const {imgCompress} = require("./config");
const path = require('path');

/**
 * 压缩图片
 * @param  {string} fileName   原始图片
 * @return {string}  压缩后图片
 */

const compress = fileName => {
  if(imgCompress.enable) {
    console.log('compressing...')
    tinify.key = imgCompress.key;

    let source = tinify.fromFile(path.join(__dirname, '../view/album/' + fileName));
    source.toFile(path.join(__dirname, '../view/album/compressed/' + fileName), () => {
      console.log('compress done')
    });
    return '../album/compressed/' + fileName;
  } else {
    return '../album/' + fileName
  }
}

module.exports = compress;
