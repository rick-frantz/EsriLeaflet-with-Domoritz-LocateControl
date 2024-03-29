var esriUrl='http://maps1.arcgisonline.com/ArcGIS/rest/services/USA_Federal_Lands/MapServer';
var esriAttrib='Map data © <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
var esri = L.esri.dynamicMapLayer(esriUrl, {});

var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
var osm = new L.TileLayer(osmUrl, {
    attribution: osmAttrib,
    detectRetina: true
});

var token = 'pk.eyJ1IjoicmZyYW50eiIsImEiOiJkN2p1Wm93In0.uha-WxArw2jdGYmsvacXeA';
var mapboxUrl = 'http://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}@2x.png?access_token=' + token;
var mapboxAttrib = 'Map data © <a href="http://osm.org/copyright">OpenStreetMap</a> contributors. Tiles from <a href="https://www.mapbox.com">Mapbox</a>.';
var mapbox = new L.TileLayer(mapboxUrl, {
  attribution: mapboxAttrib,
  opacity: 1.0
});

var map = new L.Map('map', {
    layers: [mapbox],
    center: [45.542, -122.654],
    zoom: 10,
    zoomControl: true
});

L.control.locate({
    follow: true,
    strings: {
        title: "Show me where I am, yo!"
    }
}).addTo(map);

map.on('startfollowing', function() {
    map.on('dragstart', lc._stopFollowing, lc);
}).on('stopfollowing', function() {
    map.off('dragstart', lc._stopFollowing, lc);
});
