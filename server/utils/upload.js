const path = require('path');
const os = require('os');
const fs = require('fs');
const Busboy = require('busboy');
const compress = require('./compress');

// 获取文件后缀
const getFileType = fileName => fileName.split('.')[fileName.split('.').length - 1].toLowerCase();

// 获取时间
const getDate = () => {
  let d = new Date();
  return d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() + '-' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
}

/**
 * 上传文件
 * @param  {object} ctx     koa上下文
 * @param  {object} options 文件上传参数 fileType文件类型， path文件存放路径
 * @return {promise}
 */

const uploadFile = (ctx, options) => {
  let {req, res} = ctx;
  let busboy = new Busboy({headers: req.headers});

  return new Promise((resolve, reject) => {
    console.log('uploading...');
    let result = {
      category: ctx.params.category,
      picture: undefined,
      video: undefined,
      title: undefined
    };
    let fileType = undefined;
    let fileName = undefined;
    let filePath = undefined;

    // 解析请求文件事件
    busboy.on('file', (fieldname, file, filename) => {
      fileType = getFileType(filename);
      fileName = ctx.params.category.toUpperCase() + '-' + getDate() + '.' + fileType;
      filePath = path.join(__dirname, '../view/album/' + fileName);

      file.pipe(fs.createWriteStream(filePath));

      file.on('end', () => {
        resolve(result)
      });
    })

    // 解析表单中其他字段信息
    busboy.on('field', (fieldname, val) => {
      let obj = {}
      obj[fieldname] = val;
      result.title = obj.title;
    });

    // 解析结束事件
    busboy.on('finish', () => {
      console.log('upload done');
      if(fileType === 'mp4') {
        result.video = '../album/' + fileName;
      } else {
        result.picture = compress(fileName)
      }
      resolve(result)
    })

    // 解析错误事件
    busboy.on('error', (err) => {
      console.log('upload error')
      reject(result)
    })

    req.pipe(busboy)
  })

}

module.exports = uploadFile
