<template>
  <div id="markdown-body">
    <div class="blog-wrap">
      <div class="blog-title">{{nav}}</div>
      <div class="blog plain">{{nav}}</div>
      <div class="blog-time">{{nav}}</div>
    </div>
  </div>
</template>

<script>
  import marked from 'marked'
  export default {
    name: 'Blogs',
    props: {
      nav: String
    },
    data() {
      return {
        blog: [
          {
            title: '',
            text: '',
            html: '',
            time: '',
          }
        ]
      }
    },
    mounted() {

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
  }

  .blog-wrap .blog-title {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: inherit;
  }

  .blog-wrap .blog-time {
    font-size: 14px;
    text-align: center;
    color: #333;
  }
</style>
