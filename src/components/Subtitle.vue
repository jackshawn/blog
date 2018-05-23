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
          Blog: "一直有写写东西的习惯,择一些能贱人的放在这边",
          Life: "x,x",
          Movie: "x,x",
          Hehe: "x,x",
          Drawing: "x,x"
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
    margin: 0 auto;
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
