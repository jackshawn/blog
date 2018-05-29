<template>
  <div id="markdown-body">
    <div class="blog-wrap" v-for="item in blog">
      <div class="blog-title">{{item.title}}</div>
      <div v-if="item.type === 'plain'" class="blog plain" v-html="item.content"></div>
      <div v-else class="blog" v-html="item.html"></div>
      <div class="blog-time">{{item.date}}</div>
    </div>
    <More @fetch="addBlog" :nav=nav></More>
  </div>
</template>

<script>
  import marked from 'marked'
  import axios from 'axios'
  import More from './More.vue'
  export default {
    name: 'Blogs',
    props: {
      nav: String
    },
    components: {More},
    data() {
      return {
        blog: []
      }
    },
    methods: {
      addBlog(data) {
        let _this = this;
        data.forEach(i => {
          _this.blog.push({
            title: i.title,
            content: i.content.replace(/\n/g, '<br>'),
            html: i.type === 'plain' ? i.content : marked(i.content),
            date: i.date.substr(0, 10),
            type: i.type
          })
        })
      }
    }
  }
</script>

<style scoped>
  .blog-wrap {
    position: relative;
    padding: 10px 20px;
    margin-bottom: 20px;
    background: #fff;
    box-shadow: 1px 1px 2px #ccc;
  }

  .blog-wrap .plain {
    text-align: center;
    line-height: 2em;
  }

  .blog-wrap .blog-title {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: inherit;
    line-height: 2.5em;
  }

  .blog-wrap .blog-time {
    font-size: 14px;
    text-align: center;
    color: #333;
    line-height: 2.5em;
  }
</style>
