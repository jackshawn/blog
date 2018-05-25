<template>
  <div style="height: 100%;">
    <Header :navName="nav || 'Home'"></Header>
    <Subtitle v-if="nav" :nav=nav></Subtitle>
    <Blog nav="Blog" v-show="nav === 'Blog'"></Blog>
    <Photo v-for="item in photoCategory" :nav="item" v-show="nav === item"></Photo>
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

