<template>
  <div id="echarts-container">
    todo echarts map
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: 'Destination',
    data() {
      return {}
    },
    mounted(){
      var myChart = echarts.init(document.getElementById('echarts-container'));


      var option = {
        geo: {
          map: 'china',
        },
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
</script>
<style scoped>
  #echarts-container {
    width: 100%;
    height: 600px;
  }
</style>
