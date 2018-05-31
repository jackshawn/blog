<template>
  <div id="admin">
    <div id="header">
      <div id="tab">
        <span :class="{active: activeTab ==='add'}" @click="toggleTab('add')">ADD</span>
        <span :class="{active: activeTab ==='remove'}" @click="toggleTab('remove')">REMOVE</span>
      </div>
      <div id="user">Hi {{user}}; <span class="logout" @click="logout">logout</span></div>
    </div>
    <admin-add v-show="activeTab ==='add'"></admin-add>
    <admin-remove v-show="activeTab ==='remove'"></admin-remove>
  </div>
</template>

<script>
  import axios from 'axios';
  import AdminAdd from './AdminAdd.vue'
  import AdminRemove from './AdminRemove.vue'
  export default {
    name: 'Admin',
    components: {AdminAdd, AdminRemove},
    data() {
      return {
        user: '',
        activeTab: 'add'
      }
    },
    mounted() {
      this.check();
    },
    methods: {
      toggleTab(tab){
        this.activeTab = tab;
      },
      check() {
        let _this = this;
        axios.get('/check')
          .then((res) => {
            if(res.data.result === 'fail') {
              _this.$router.push('Login')
            } else {
              _this.user = res.data.user;
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
      },
    }
  }
</script>

<style scoped>
  #admin {
    max-width: 800px;
    height: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }

  #header {
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
  }

  #tab span{
    display: inline-block;
    margin-right: 10px;
  }

  #tab span.active{

    border-bottom: 2px solid #ccc;
    font-weight: bold;
  }

  #user .logout {
    text-decoration: underline;
    cursor: pointer;
  }
</style>
