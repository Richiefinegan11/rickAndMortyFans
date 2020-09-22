function initMap() {
    var ireland = {lat: 53.27835301753182,
        lng: -7.712402343750001}
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: ireland
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let bikeLayer = new google.maps.BicyclingLayer();
    bikeLayer.setMap(map);

    $(".towns").click(function () {
        
        map.setCenter(new google.maps.LatLng(this.dataset.lat, this.dataset.lng));
        map.setZoom(14);
    });
    const towns = [
        ["Dublin", 53.286572, -6.370580],
        ["Galway", 53.273800, -9.051780 ],
        ["Cork", 51.885509, -8.405220 ],
        ["Belfast", 54.597286, -5.930120 ],
    ];

    let bounds = new google.maps.LatLngBounds();
    for (i = 0; i < towns.length; i++) {
        var marker = new google.maps.Marker({
            position: {
                lat: towns[i][1],
                lng: towns[i][2],
            },
            title: towns[i][0],
            map: map,
        });
        bounds.extend(marker.getPosition());
    }
    map.fitBounds(bounds);
}
