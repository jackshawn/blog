<template>
  <div>
    <div class="container">
      <template v-for="item in list">
        <img v-if="item.picture" @click="showPreview(item.picture)" :ref="item.picture" :src=item.picture :alt="item.title"></img>
        <span v-else class="video">
          <video :src="item.video" controls type="video/mp4"></video>
        </span>
      </template>
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
        list: [],
      }
    },
    methods: {
      showPreview(id) {
        let imgDom = this.$refs[id][0]
        imgDom.className = imgDom.className ? '' : 'preview'
      },
      addPhoto(data) {
        this.list = this.list.concat(data)
      }
    }
  }
</script>

<style scoped>
  .container {
    margin: 0 auto;
  }

  .container > img,
  .container > .video {
    display: inline-block;
    width: 300px;
    height: 300px;
    margin: 10px;
    object-fit: cover;
    overflow: hidden;
  }

  .container > .video > video {
    width: 300px;
    height: 300px;
    margin: 0;
    object-fit: cover;
  }

  .container > img.preview {
    position: fixed;
    top: 50%;
    left: 50%;
    max-width: 95%;
    max-height: 95%;
    margin: 0;
    z-index: 99;
    width: auto;
    height: auto;
    transform: translate(-50%,-50%);

    border: 2000px solid rgba(0, 0, 0, .75);
  }

  @media (max-width: 640px) {
    .container {width: 320px}
  }

  @media (min-width: 640px) and (max-width: 1280px) {
    .container {width: 640px}
  }

  @media (min-width: 1280px) {
    .container {width: 1280px}
  }
</style>
