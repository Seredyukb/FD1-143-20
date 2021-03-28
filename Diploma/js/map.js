function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(53.929407548312845, 27.54697938179048), zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}		

