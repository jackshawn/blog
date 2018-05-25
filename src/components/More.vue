<template>
  <p id="fetch">
    <span v-if="state ==='loaded'" @click="getMore" class="more">MORE</span>
    <span v-if="state ==='loading'" class="loading">LOADING..<span class="dot">.</span></span>
    <span v-if="state ==='done'" class="done">DONE</span>
  </p>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'More',
    props: {
      nav: String
    },
    data() {
      return {
        state: 'loaded',
        startDate: ''
      }
    },
    mounted() {
      this.getMore()
    },
    methods: {
      getMore() {
        let _this = this;
        if(this.nav){
          let url = (this.nav === 'Blog' ? '/blog' : '/photo/' + this.nav.toString().toLowerCase()) + (this.startDate ? '?startDate=' + this.startDate : '');

          this.state = 'loading'
          axios.get(url)
            .then((res) => {
              let d = res.data;
              _this.state = d.length < 6 ? 'done' : 'loaded';
              if(d.result === 'success') {
                _this.$emit('fetch', d.data)
              }
            }).catch((error) => {
            console.log(error)
          });
        }
      }
    }
  }
</script>

<style scoped>
  #fetch {
    text-align: center;
    margin: 10px 0 20px;
  }

  #fetch .more {
    cursor: pointer;
  }

  #fetch .dot {
    animation: blink 1s;
    animation-iteration-count: infinite;
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }

    49% {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }
  }
</style>
