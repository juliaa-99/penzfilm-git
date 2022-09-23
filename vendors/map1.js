ymaps.ready(init);
function init () {

    var myMap3 = new ymaps.Map("map", {
        center: [55.77101400, 37.63209300],
        zoom: 13,
        controls: ["zoomControl"]
    });

    myMap3.controls.add('fullscreenControl', {float: 'left'});
    //myGeoObject = new ymaps.GeoObject();
    myMap3.geoObjects
        .add(new ymaps.Placemark([55.77101400, 37.63209300], {
            balloonContent: ''
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'assets/images/svg/pinmap.svg',
            iconImageSize: [32, 32],
            iconImageOffset: [-80, -70]
        }))
}