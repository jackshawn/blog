<template>
  <div>
    <div class="radio-wrap">
      <span class="radio" v-for="item in category.list">
        <input type="radio" :id="item" :value="item" v-model="category.selected">
        <label :for="item">{{item}}</label>
      </span>
    </div>
    <div id="container">
      <div id="blog" v-show="category.selected === 'Blog'">
        <input type="text" placeholder="标题" v-model="blog.title">
        <textarea name="blog" placeholder="内容" rows="20" v-model="blog.content"></textarea>
        <div class="blog-type">
          <input type="radio" id="plain" value="plain" v-model="blog.type"><label for="plain">plain</label>
          <input type="radio" id="markdown" value="markdown" v-model="blog.type"><label for="markdown">markdown</label>
        </div>
      </div>
      <div id="photo" v-show="'LifeMovieHeheDrawingMarkdownOnly'.indexOf(category.selected) !== -1">
        <form method="POST" :action="'photo/' + category.selected.toLowerCase()" enctype="multipart/form-data" target="frame">
          <input type="text" name="title" placeholder="标题">
          <input type="file" name="filefield">
          <input type="submit">
        </form>
        <iframe src="" style="height: 40px;" frameborder="0" name="frame" id="frame"></iframe>
      </div>
      <div id="destination" v-show="category.selected === 'Destination'">
        <input type="text" placeholder="位置" v-model="destination.location">
        <input type="text" placeholder="经度" v-model="destination.longitude">
        <input type="text" placeholder="纬度" v-model="destination.latitude">
      </div>
    </div>
    <p :style="{textAlign: 'right', display: showBtn}" >
      <span class="send-btn" @click="send">
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1438"><path
          d="M915.515273 142.819385 98.213046 458.199122c-46.058539 17.772838-44.90475 43.601756 2.348455 57.622994l197.477685 58.594874 80.292024 238.91085c10.51184 31.277988 37.972822 37.873693 61.462483 14.603752l103.584447-102.611545 204.475018 149.840224c26.565749 19.467242 53.878547 9.222132 61.049613-23.090076l149.210699-672.34491C965.264096 147.505054 946.218922 130.971848 915.515273 142.819385zM791.141174 294.834331l-348.61988 310.610267c-6.268679 5.58499-11.941557 16.652774-12.812263 24.846818l-15.390659 144.697741c-1.728128 16.24808-7.330491 16.918483-12.497501 1.344894l-67.457277-203.338603c-2.638691-7.954906 0.975968-17.705389 8.022355-21.931178l442.114555-265.181253C812.67481 268.984974 815.674251 272.975713 791.141174 294.834331z"
          p-id="1439"></path></svg>
      </span>
    </p>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'AdminAdd',
    data() {
      return {
        category: {
          list: ['Blog', 'Life', 'Movie', 'Destination', 'Hehe', 'Drawing', 'MarkdownOnly'],
          selected: 'Blog'
        },
        blog: {
          title: '',
          content: '',
          type: 'plain'
        },
        destination: {
          location: '',
          longitude: '',
          latitude: '',
        },
        photo: {
          title: '',
          picture: '',
          video: ''
        }
      }
    },
    methods: {
      send() {
        let _this = this;
        if(this.category.selected === 'Blog') {
          if(this.blog.title && this.blog.content){
            axios.post('/blog', _this.blog)
              .then((res) => {
                if(res.data.result === 'success') {
                  alert('发布成功')
                  location.reload();
                } else {
                  alert(res.data.msg)
                }
              }).catch((error) => {
              console.log(error)
            });
          } else {
              alert('内容不能为空')
          }
        }
        if(this.category.selected === 'Destination') {
          if(this.destination.location && this.destination.longitude && this.destination.latitude){
            axios.post('/destination', _this.destination)
              .then((res) => {
                if(res.data.result === 'success') {
                  alert('发布成功')
                  location.reload();
                } else {
                  alert(res.data.msg)
                }
              }).catch((error) => {
              console.log(error)
            });
          } else {
            alert('内容不能为空')
          }
        }
        if('LifeMovieHeheDrawing'.indexOf(this.category.selected) !== -1) {}
      }
    },
    computed: {
      showBtn() {
        return 'LifeMovieHeheDrawingMarkdownOnly'.indexOf(this.category.selected) === -1 ? 'block' : 'none'
      }
    }
  }
</script>

<style scoped>
  .radio-wrap {
    display: block;
    flex-direction: column;
  }

  .radio {
    margin-right: 10px;
  }

  .radio input {
    vertical-align: text-top;
  }

  #container {
    margin-top: 20px;
  }

  #container input,
  #container textarea {
    width: 100%;
    border: 0;
    padding: 5px 0;
    margin: 5px auto;
    box-shadow: 1px 1px 1px #ccc;
    font-size: 14px;
    line-height: 1.5em;
  }

  .send-btn {
    display: inline-block;
    width: 24px;
  }

  .send-btn svg {
    fill: #666;
  }

  #container #blog .blog-type {
    height: 24px;
    font-size: 14px;
    vertical-align: middle;
  }

  #container #blog .blog-type input{
    width: auto;
    margin-right: 10px;
    box-shadow: none;
  }

  @media (max-width: 600px) {
    .radio-wrap {
      display: flex;
    }
  }
</style>
