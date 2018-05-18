<template>
  <div id="notes">
    <span class="left">“</span>
    <template v-for="item in notes.split(',')">
      <p>{{item}}</p>
    </template>
    <span class="right">“</span>
  </div>
</template>

<script>
  export default {
    props: {
      notes: String,
    },
    data() {
      return {
      }
    },
  }
</script>

<style scoped>
  #notes {
    /*margin-top: 400px;*/

    font-family: Helvetica, Arial, sans-serif, 'Avenir';
    font-size: 14px;
    line-height: 3em;
    margin: 0 auto;
    padding: 20px 40px;
    position: relative;
    text-align: center;
    max-width: 520px;
  }

  #notes .left,
  #notes .right {
    font-size: 36px;
    font-weight: bold;
    display: inline-block;
    position: absolute;
  }

  #notes .left {
    top: 0;
    left: 20px;
  }

  #notes .right {
    bottom: 0;
    right: 20px;
    transform: rotate(180deg);
  }

  /* mobile*/
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
</style>
