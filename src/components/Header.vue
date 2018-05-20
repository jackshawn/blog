<template>
  <div id="nav" :style="{height: isHome ? '100%' : '300px'}">
    <router-link v-for="item in nav" :to="item.path" :class="{active: (item.name === navName) && !isHome}">
      {{item.name}}
    </router-link>
    <div id="cover"></div>
    <a id="cursor" v-show="showCursor">|</a>
    <img id="bg-img" :src="bgImageURL">
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      navName: String,
    },
    data() {
      return {
        bgImageURL: undefined,
        width: window.innerWidth,
        height: window.innerHeight,
        showCursor: true,
//        isHome: true,
        nav: [],
        navAll: [
          {
            name: 'Home',
            path: '/'
          },
          {
            name: 'Blog',
            path: '/Blog'
          },
          {
            name: 'Life',
            path: '/Life'
          },
          {
            name: 'Movie',
            path: '/Movie'
          },
          {
            name: 'Destination',
            path: '/Destination'
          },
          {
            name: 'Hehe',
            path: '/Hehe'
          },
          {
            name: 'Drawing',
            path: '/Drawing'
          },
        ]
      }
    },
    mounted() {
      let _this = this;
      let i = 0;
      let j = 0;
      this.bgImageURL = 'https://picsum.photos/g/' + this.width + '/' + this.height + '/?random';

      // 文字键入
      let typeIn = function() {
        if(i < _this.navAll.length) {
          if(j < _this.navAll[i].name.length) {
            if(j === 0) {
              _this.nav.push({
                name: _this.navAll[i].name.split('')[j],
                path: _this.navAll[i].path
              })
            } else {
              _this.nav[i].name += _this.navAll[i].name.split('')[j];
            }
            j++
          } else {
            i++;
            j = 0
          }
        }
      };

      let timer = setInterval(typeIn, 200);

      // 图片加载完成
      document.getElementById('bg-img').onload = function() {
        // 清除计时器, 加速键入
        clearInterval(timer);
        let t = setInterval(typeIn, 20);
        setTimeout(function() {
          clearInterval(t)
        }, 2000);

        // 隐藏光标
        _this.showCursor = false;
      }
    },
    computed: {
      isHome(){
        return this.navName === 'Home'
      }
    }
  }
</script>

<style scoped>
  #nav {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    background: #ccc;
    position: relative;
    z-index: 1;

    transition: 1s all;
  }

  #nav a {
    display: inline-block;
    flex-direction: column;
    text-align: center;
    font-size: 18px;
    color: #fff;
    text-decoration: none;
    margin: 10px;
  }

  #cursor {
    font-weight: bold;
    color: #fff;
    animation: shine 1s;
    animation-iteration-count: infinite;
  }

  #cover {
    margin: auto;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: rgba(0, 0, 0, .5);
  }

  #bg-img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    z-index: -2;
    transition: 1s all;
  }

  /* Mobile*/
  @media (max-width: 600px) {
    #nav {
      flex-direction: column;
    }

    #nav a {
      padding: 0 10px;
    }

    #nav a.active {
      border-left: 4px solid #ccc;
      font-weight: bold;
    }
  }

  /* PC*/
  @media (min-width: 600px) {
    #nav {
      flex-direction: row;
    }

    #nav a {
      padding: 10px 0;
      border-bottom: 4px solid transparent;
    }

    #nav a.active {
      border-bottom: 4px solid #fff;
    }
  }

  @keyframes shine {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
</style>
