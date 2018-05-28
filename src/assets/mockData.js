import Mock from 'mockjs'
import { Random } from 'mockjs'


Mock.setup({
  timeout: '200-600'
})

let defaultRes = {
  result: 'success',
  msg: Random.cword(5, 7)
}

let blog = {
  result: 'success',
  data: new Array(6).fill(() => {
    return {
      title: Random.cword(5, 7),
      content: Random.paragraph(),
      date: Random.date('yy-MM-dd'),
      type: 'plain'
    }
  })
}

let photo = {
  result: 'success',
  data: new Array(6).fill(() => {
    return {
      title: Random.cword(5, 7),
      img: Random.image('300x300', '#cccccc', Random.word(5, 7)),
      date: Random.date('yy-MM-dd'),
      link: 'plain'
    }
  })
}


// blog
Mock.mock(/^\/blog/, 'get', blog)
Mock.mock('/blog', 'post', defaultRes)
Mock.mock('/blog', 'delete', defaultRes)

// photo
Mock.mock('/photo/life', 'get', photo)
Mock.mock('/photo/movie', 'get', photo)
Mock.mock('/photo/hehe', 'get', photo)
Mock.mock('/photo/drawing', 'get', photo)
