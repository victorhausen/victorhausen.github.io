var mymap = L.map('mapid').setView([-25.48, -49.30], 11);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidmljdG9yaGF1c2VuIiwiYSI6ImNqcmh0MDJlMzBhbGkzeXF5eGxpZ3hra3gifQ.yEYR5PX0Kd9OWkC4pNMnFQ', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox.streets'
}).addTo(mymap);
