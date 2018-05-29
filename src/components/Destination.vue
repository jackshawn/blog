<template>
  <div id="destination">
    <div id="map-container"></div>
    <ul id="map-nav">
      <li v-for="item in navAll">
        <router-link :to="item.path">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Destination',
    data() {
      return {
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
        ],
        destinations: []
      }
    },
    mounted(){
      let _this = this;
      let map = new BMap.Map("map-container");

      // 地图自定义样式
      let myStyleJson = [
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": {
            "color": "#999999ff"
          }
        },
        {
          "featureType": "poilabel",
          "elementType": "all",
          "stylers": {
            "visibility": "off"
          }
        },
        {
          "featureType": "road",
          "elementType": "all",
          "stylers": {
            "visibility": "off"
          }
        },
        {
          "featureType": "administrative",
          "elementType": "all",
          "stylers": {
            "visibility": "off"
          }
        },
        {
          "featureType": "land",
          "elementType": "all",
          "stylers": {
            "color": "#ccccccff"
          }
        }
      ];

      let point = new BMap.Point(113.9676972505, 22.7415661316); // 中心位置

      map.setMapStyle({styleJson: myStyleJson});
      map.enableScrollWheelZoom(true);
      map.centerAndZoom(point, 1);

      let getMarker = (arr) => {
        return new BMap.Marker(new BMap.Point(arr[0], arr[1]), {
          icon: new BMap.Symbol(BMap_Symbol_SHAPE_POINT, {
            scale: .5,
            fillColor: "#fff",
            strokeColor: "#fff",
            fillOpacity: 0.8
          })
        });
      };
      axios.get('/destination')
        .then((res) => {
          let d = res.data;
          if(d.result === 'success') {
            d.data.forEach(i => {
              _this.destinations.push([i.longitude, i.latitude])
            })
            _this.destinations.forEach(i => {
              map.addOverlay(getMarker(i));
            })
          } else {
            alert(res.data.msg)
          }
        }).catch((error) => {
        console.log(error)
      });

    }
  }
</script>
<style scoped>
  #destination {
    width: 100%;
    height: 100%;
    position: relative;
  }

  #map-container {
    width: 100%;
    height: 100%;
  }

  #map-nav {
    position: absolute;
    left: 10px;
    bottom: 20px;
    z-index: 1;
  }

  #map-nav li {
    list-style-type: none;
  }

  #map-nav li a {
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
  }
</style>
