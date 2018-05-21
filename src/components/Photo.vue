<template>
  <div>
    <div class="container">
      <img v-for="img in imgList" @click="showPreview(img)" :src=img></img>
      <div v-show="previewURL" @click="hidePreview" id="preview">
        <img :src=previewURL></img>
      </div>
    </div>
    <p id="more">MORE</p>
  </div>

</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Photos',
    props: {
      nav: String
    },
    data() {
      return {
        previewURL: undefined,
        imgList: [
            'http://ocm0knkb1.bkt.clouddn.com/1-1.jpg',
            'http://ocm0knkb1.bkt.clouddn.com/1-2.jpg',
            'http://ocm0knkb1.bkt.clouddn.com/1-3.jpg',
        ]
      }
    },
    mounted() {

      axios.get('photo/lief?startDate=2018-05-04')
        .then((res) => {

      }).catch((error) => {
        console.log(error)
      });



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

  #more {
    text-align: center;
  }

  @media (min-width: 640px) {
    .container > img:last-of-type {
      transform: translateX(-160px);
    }
  }
</style>
