<template>
  <table id="list">
    <thead>
      <tr>
        <th></th>
        <th>标题</th>
        <th>时间</th>
        <th>类别</th>
        <th>ID</th>
        <th></th>
      </tr>
    </thead>

    <tbody class="list-body">
      <tr v-for="(item, index) in list">
        <td style="width: 36px;">{{index + 1}}</td>
        <td>
          <a :href="item.src" target="_blank" v-if="item.category == 'photo'">{{item.title}}</a>
          <span v-else>{{item.title}}</span>
        </td>
        <td>{{item.date}}</td>
        <td>{{item.category}}</td>
        <td style="width: 36px;">{{item.id}}</td>
        <td class="del"><svg @click="del(item.category, item.id)" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1428"><path d="M694.88 940H329.12c-58 0-105.12-43.04-105.12-96v-448a32 32 0 0 1 64 0v448c0 17.36 18.88 32 41.12 32h365.76c22.32 0 41.12-14.64 41.12-32v-448a32 32 0 0 1 64 0v448c0 52.96-47.2 96-105.12 96zM864 304H160a32 32 0 0 1 0-64h704a32 32 0 0 1 0 64zM432 812a32 32 0 0 1-32-32v-320a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zM592 812a32 32 0 0 1-32-32v-320a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zM384 276a32 32 0 0 1-32-32 160 160 0 0 1 276.16-110 32 32 0 1 1-46.48 44A95.12 95.12 0 0 0 512 148a96 96 0 0 0-96 96 32 32 0 0 1-32 32z" p-id="1429"></path></svg></td>
      </tr>
    </tbody>
    <tbody class="list-tip">
      <tr>
        <td colspan="6">
          <svg class="icon" viewBox="0 0 1326 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2368"><path d="M1180.499431 195.158517h-300.423015c-49.138958 0-89.078917 40.172845-89.078918 89.661133v649.519217c0 49.488287 39.823516 89.661133 89.078918 89.661133h300.539458c49.138958 0 89.078917-40.172845 89.078918-89.661133V284.703207c-0.116443-49.371844-40.056402-89.54469-89.195361-89.54469z m-222.522629 78.366159h144.622243v33.652035H957.976802v-33.652035z m-52.166477 0.465772c9.548328 0 17.350011 7.801683 17.350012 17.466454 0 9.548328-7.68524 17.466454-17.350012 17.466455s-17.350011-7.801683-17.350011-17.466455 7.68524-17.466454 17.350011-17.466454z m132.745054 684.21924c-16.651353 0-30.158745-13.623834-30.158745-30.39163 0-16.767796 13.507391-30.391631 30.158745-30.391631s30.158745 13.623834 30.158744 30.391631c0 16.767796-13.507391 30.391631-30.158744 30.39163z m175.363202-79.996361H846.657266V340.712304h367.261315v537.501023zM568.358426 680.609506h-55.659768v167.910849h55.659768V680.609506z m-22.124175 145.553787h-11.178531V702.966568h11.178531v123.196725z m209.015237-201.79577V602.010462H605.503753v339.780759h149.745735v-22.357061H627.744371V624.367523h127.505117zM541.576529 928.050944c15.603366 0 28.412099-12.808733 28.4121-28.644985s-12.808733-28.644985-28.4121-28.644986-28.412099 12.808733-28.412099 28.644986 12.808733 28.644985 28.412099 28.644985z m0-34.816466c3.493291 0 6.287924 2.794633 6.287924 6.287924s-2.794633 6.287924-6.287924 6.287923c-3.493291 0-6.287924-2.794633-6.287923-6.287923s2.911076-6.287924 6.287923-6.287924zM434.914715 620.641346v302.402548c0 55.543325 44.947009 100.839663 100.141005 100.839663h220.193768v-22.357062H535.05572c-42.967478 0-78.01683-35.165795-78.01683-78.482601V620.641346c0-43.200364 34.932909-78.482602 78.01683-78.482601h220.193768v-22.357062H535.05572c-55.310439 0.116443-100.141005 45.296338-100.141005 100.839663z m96.414828-244.763247c11.062088-79.530589 72.544007-140.080964 148.115533-153.937685l-6.404366-21.425517c-83.606095 16.418467-151.608824 83.955424-163.835343 172.452126-0.349329 2.095975-0.465772 4.191949-0.698658 6.287924L476.25199 331.746191l-18.514442 12.459404 57.057085 83.838981 76.153741-65.790312-14.671822-16.767796-45.994996 39.59063c0.349329-3.027519 0.698658-6.055038 1.047987-9.198999z" fill="" p-id="2369"></path></svg>
          <br>
          旋转设备浏览，以获取更好体验
        </td>
      </tr>
    </tbody>

  </table>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'AdminRemove',
    data() {
      return {
        list: []
      }
    },
    mounted() {
      this.getList()
    },
    methods: {
      del(categroy, id) {
        let _this = this;
        if(confirm('确定删除?')){
          axios.delete('/' + categroy + '/' + id)
            .then((res) => {
              if(res.data.result === 'success') {
                _this.list = [];
                _this.getList();
              } else {
                alert(res.data.msg)
              }
            }).catch((error) => {
            console.log(error)
          });
        }
      },
      getList() {
        let _this = this;
        axios.get('/blog?getAll=yes')
          .then((res) => {
            if(res.data.result === 'success') {
              res.data.data.forEach(i => {
                _this.list.push({
                  category: 'blog',
                  title: i.title,
                  id: i.id,
                  date: i.date
                })
              })
            } else {
              alert(res.data.msg)
            }
          }).catch((error) => {
          console.log(error)
        });
        axios.get('/photo/all')
          .then((res) => {
            if(res.data.result === 'success') {
              res.data.data.forEach(i => {
                _this.list.push({
                  category: 'photo',
                  title: i.title,
                  id: i.id,
                  date: i.date,
                  src: i.picture || i.video
                })
              })
            } else {
              alert(res.data.msg)
            }
          }).catch((error) => {
          console.log(error)
        });
        axios.get('/destination')
          .then((res) => {
            if(res.data.result === 'success') {
              res.data.data.forEach(i => {
                _this.list.push({
                  category: 'destination',
                  title: i.location,
                  id: i.id,
                  date: i.date
                })
              })
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

<style scoped>
  #list {
    width: 100%;
    margin-bottom: 40px;
    border: 1px solid #ddd;
    border-collapse: collapse;
  }

  #list th,
  #list td {
    padding: 8px;
    border: 1px solid #ddd;

    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 0;
    color: #333;
  }

  #list td a {color: #333}

  #list tr:hover{background: #fff;}

  #list .del {
    width: 30px;
    text-align: center;
  }

  #list .del svg{
    width: 1em;
    vertical-align: middle;
    cursor: pointer;
  }

  #list .list-tip tr td{
    text-align: center;
    height: 200px;
  }

  #list .list-tip .icon{
    height: 3em;
  }

   /*Mobile*/
  @media (max-width: 560px) {
    #list .list-body {display: none}
  }

  /* Pc*/
  @media (min-width: 560px) {
    #list .list-tip {display: none}
  }

</style>
