// 前后台交互接口

const API = [
  // 获取照片
  {
    url: '/photo/category',
    type: 'GET',
    req: 'startDate',
    res: {
      result: 'success',
      data: [
        {
          picture: '',
          video: '',
          title: '',
          time: '',
          link: ''
        },
      ]
    }
  },

  // 添加照片
  {
    url: '/photo/category',
    type: 'POST',
    req: '',
    res: {
      result: 'success',
      msg: ''
    }
  },

  // 删除照片
  {
    url: '/photo/category/ID',
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
    req: 'startDate',
    res: {
      result: 'success',
      data: [
        {
          title: '',
          content: '',
          time: ''
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
      time: ''
    },
    res: {
      result: 'success',
      msg: ''
    }
  },

  // 删除博客
  {
    url: '/blog',
    type: 'GET',
    req: 'startDate',
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
          longitude: '',
          latitude: '',
          location: '',
          link: '',
          date: ''
        },
      ]
    }
  },
]

