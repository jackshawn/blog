<template>
  <div style="height: 100%;">
    <br>
    <input type="text" v-model="username">
    <br>
    <br>
    <input type="password" v-model="password">
    <br>
    <br>
    <button @click="login">Login</button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: ''
      }
    },
    mounted() {
      this.check();
    },
    methods: {
      check() {
        let _this = this;
        axios.get('/check')
          .then((res) => {
            if(res.data.result === 'success') {
              _this.$router.push('Admin')
            }
          }).catch((error) => {
          console.log(error)
        });
      },
      login() {
        let _this = this;
        axios.post('/login', {
          username: _this.username,
          password: _this.password
        })
          .then((res) => {
            if(res.data.result === 'success') {
              this.$router.push('Admin')
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

