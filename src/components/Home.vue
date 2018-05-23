<template>
  <div style="height: 100%;">
    <!--<Header :navName="nav || 'Home'"></Header>-->
    <Subtitle v-if="nav" :nav=nav></Subtitle>
    <keep-alive>
      <component v-show="nav" :is=curComponent :nav=nav></component>
    </keep-alive>
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
      return {}
    },
    computed: {
      curComponent() {
        return this.nav === 'Blog' ? 'Blog' : 'Photo'
      }
    }
  }
</script>

