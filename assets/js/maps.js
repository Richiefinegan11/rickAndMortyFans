function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: {
            lat: 53.27835301753182,
            lng: -7.712402343750001
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        {lat: 53.279995244347994, lng: -6.363830566406251 },
        {lat: 53.27342595846812, lng: -9.047412872314455 },
        {lat: 51.887511191058756, lng: -8.46676826477051 },
        {lat: 54.58434909323848, lng: -5.931200981140137 },
    ];

    var markers = locations.map(function(location, i){
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]            
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}
