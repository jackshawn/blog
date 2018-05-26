<template>
  <div style="height: 100%;">
    welcome

    <br>
    <br>
    <br>
    <button @click="logout"></button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Admin',
    data() {
      return {}
    },
    mounted() {
      this.check();
    },
    methods: {
      check() {
        let _this = this;
        axios.get('/check')
          .then((res) => {
            if(res.data.result === 'fail') {
              _this.$router.push('Login')
            }
          }).catch((error) => {
          console.log(error)
        });
      },
      logout() {
        let _this = this;
        axios.get('/logout')
          .then((res) => {
            if(res.data.result === 'success') {
              _this.$router.push('Login')
            } else {
                alert(res.data.msg)
            }
          }).catch((error) => {
          console.log(error)
        });
      }
    }
  }
</script>

