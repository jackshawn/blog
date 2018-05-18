<template>
  <div style="height: 100%;">
    <Header :navName="nav || 'Home'"></Header>
    <Note v-show="nav" :notes="notes[nav]"></Note>
    <keep-alive>
      <component :is=cur :nav=nav></component>
    </keep-alive>
  </div>
</template>

<script>
  import Header from './Header.vue'
  import Note from './Note.vue'
  import Blog from './Blog.vue'
  import Photo from './Photo.vue'

  export default {
    name: 'Home',
    components: {
      Header,
      Note,
      Blog,
      Photo
    },
    props: {
      nav: String
    },
    data() {
      return {
        notes: {
          Blog: "一直有写写东西的习惯,择一些能贱人的放在这边",
          Life: "x,x",
          Movie: "x,x",
          Hehe: "x,x",
          Drawing: "x,x"
        },
      }
    },
    computed: {
        cur() {
            return this.nav === 'Blog' ? 'Blog' : 'Photo'
        }
    }
  }
</script>

