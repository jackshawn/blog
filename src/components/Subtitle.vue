<template>
  <div id="subtitles">
    <span class="left">“</span>
    <template v-for="item in subtitles[nav].split(',')">
      <p>{{item}}</p>
    </template>
    <span class="right">“</span>
  </div>
</template>

<script>
  export default {
    props: {
      nav: String,
    },
    data() {
      return {
        subtitles: {
          Home: "记录生活,无关技术",
          Blog: "一直有写东西的习惯,择一些能见人的放在这边",
          Life: "记录生活",
          Movie: "一部电影 一次震憾,一本胶片 一串记忆,一个人物 一段历程",
          Hehe: "A DOG/CAT IS MUST HAVE,HE NAMES HEHE",
          Drawing: "A,FLAG"
        }
      }
    },
  }
</script>

<style scoped>
  #subtitles {
    font-family: Helvetica, Arial, sans-serif, 'Avenir';
    font-size: 14px;
    line-height: 3em;
    margin: 10px auto 0;
    padding: 20px 40px;
    position: relative;
    text-align: center;
    max-width: 520px;
  }

  #subtitles .left,
  #subtitles .right {
    font-size: 36px;
    font-weight: bold;
    display: inline-block;
    position: absolute;
  }

  #subtitles .left {
    top: 0;
    left: 20px;
  }

  #subtitles .right {
    bottom: 0;
    right: 20px;
    transform: rotate(180deg);
  }
</style>
