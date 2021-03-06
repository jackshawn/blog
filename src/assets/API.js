// 前后台交互接口

const API = [

  // 登录
  {
    url: '/login',
    type: 'POST',
    req: {
      username: '',
      password: ''
    },
    res: {
      result: 'success',
      msg: ''
    }
  },

  // 退出
  {
    url: '/logout',
    type: 'GET',
    res: {
      result: 'success',
      msg: ''
    }
  },

  // 状态检测
  {
    url: '/check',
    type: 'GET',
    res: {
      result: 'success',
      user: '',
      msg: ''
    }
  },

  // 获取照片
  {
    url: '/photo/category',
    type: 'GET',
    req: 'ID',
    res: {
      result: 'success',
      data: [
        {
          id: '',
          picture: '',
          video: '',
          title: '',
          date: '',
          link: ''
        },
      ]
    }
  },

  // 添加照片
  {
    url: '/photo/category',
    type: 'POST',
    req: {
      title: '',
      picture: '',
      video: '',
      link: '',
      date: ''
    },
    res: {
      result: 'success',
      msg: ''
    }
  },

  // 删除照片
  {
    url: '/photo/ID',
    type: 'DELETE',
    res: {
      result: 'success',
      msg: ''
    }
  },


  // 获取博客
  {
    url: '/blog',
    type: 'GET',
    req: 'ID',
    res: {
      result: 'success',
      data: [
        {
          title: '',
          content: '',
          date: ''
        },
      ]
    }
  },

  // 添加博客
  {
    url: '/blog',
    type: 'POST',
    req: {
      title: '',
      content: '',
      date: ''
    },
    res: {
      result: 'success',
      msg: ''
    }
  },

  // 删除博客
  {
    url: '/blog/ID',
    type: 'DELETE',
    res: {
      result: 'success',
      msg: ''
    }
  },


  // 获取位置
  {
    url: '/destination',
    type: 'GET',
    res: {
      result: 'success',
      data: [
        {
          id: '',
          longitude: '',
          latitude: '',
          location: '',
          link: '',
          date: ''
        },
      ]
    }
  },

  // 删除位置
  {
    url: '/destination/ID',
    type: 'DELETE',
    res: {
      result: 'success',
      msg: ''
    }
  },
]

