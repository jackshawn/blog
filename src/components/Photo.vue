<template>
  <div>
    <div class="container">
      <img v-for="img in imgList" @click="showPreview(img)" :src=img></img>
      <div v-show="previewURL" @click="hidePreview" id="preview">
        <img :src=previewURL></img>
      </div>
    </div>
    <More @fetch="addPhoto" :nav=nav></More>
  </div>

</template>

<script>
  import More from './More.vue'
  import axios from 'axios'

  export default {
    name: 'Photos',
    props: {
      nav: String
    },
    components: {
      More
    },
    data() {
      return {
        previewURL: undefined,
        imgList: []
      }
    },
    mounted() {
      // 禁止触摸操作
      document.getElementById('preview').addEventListener('touchmove', function(e) {
        e.preventDefault();
      }, false);
    },
    methods: {
      showPreview(url) {
        this.previewURL = url
      },
      hidePreview() {
        this.previewURL = undefined
      },
      addPhoto(data) {
        data.forEach(i => {
          this.imgList.push(i.img)
        })
      }
    }
  }
</script>

<style scoped>
  .container {
    max-width: 640px;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .container > img {
    display: inline-block;
    width: 300px;
    height: 300px;
    margin: 10px;
    object-fit: cover;
  }

  #preview {
    margin: auto;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9;
    background: rgba(0, 0, 0, .75);
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  #preview > img {
    max-width: 95%;
    max-height: 95%;
  }

  @media (min-width: 640px) {
    .container > img:last-of-type(odd) {
      transform: translateX(-160px);
    }
  }
</style>
