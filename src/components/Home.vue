<template>
  <div style="height: 100%;">
    <Header :navName="nav || 'Home'"></Header>
    <Subtitle v-if="nav" :nav=nav></Subtitle>
    <Blog nav="Blog" v-show="nav === 'Blog'" class="content"></Blog>
    <Photo v-for="item in photoCategory" :nav="item" v-show="nav === item" class="content"></Photo>
    <Footer v-if="!nav"></Footer>
  </div>
</template>

<script>
  import Header from './Header.vue'
  import Subtitle from './Subtitle.vue'
  import Blog from './Blog.vue'
  import Photo from './Photo.vue'
  import Footer from './Footer.vue'

  export default {
    name: 'Home',
    components: {
      Header,
      Subtitle,
      Blog,
      Photo,
      Footer
    },
    props: {
      nav: String
    },
    data() {
      return {
        photoCategory: ['Life', 'Movie', 'Hehe', 'Drawing']
      }
    }
  }
</script>

<style scoped>
  .content {
    animation: slide-in .5s;
  }

  @keyframes slide-in {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
</style>
