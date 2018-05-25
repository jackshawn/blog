<template>
  <div style="height: 100%;">
    <br>
    <input type="text" v-model="username">
    <br>
    <br>
    <input type="password" v-model="password">
    <br>
    <br>
    <button>Login</button>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: ''
      }
    }
  }
</script>

