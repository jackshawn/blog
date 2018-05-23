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
        ]
      }
    },
    mounted(){
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

      let destinations = [
        [118.8813533102, 32.0240048192],
        [128.8813533102, 12.0240048192],
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
      destinations.forEach(i => {
        map.addOverlay(getMarker(i));
      })
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
    left: 15px;
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
