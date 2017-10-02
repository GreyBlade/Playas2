function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: { lat: 43.47273, lng: -3.812857 },
        //mapTypeId: 'hybrid'
        mapTypeId: 'roadmap'
    });

    //--------------------------------------
    //Segunda Playa del Sardinero

    var segundaPlayaDelSardinero = [
        { lat: 43.481060, lng: -3.786929 },
        { lat: 43.481963, lng: -3.783739 },
        { lat: 43.481901, lng: -3.782537 },
        { lat: 43.479986, lng: -3.781142 },
        { lat: 43.477985, lng: -3.778996 },
        { lat: 43.476778, lng: -3.778782 },
        { lat: 43.474267, lng: -3.783315 },
        { lat: 43.474201, lng: -3.784490 },
        { lat: 43.475719, lng: -3.787000 },
        { lat: 43.478366, lng: -3.788438 },
        { lat: 43.479503, lng: -3.788760 },
        { lat: 43.480406, lng: -3.788137 },
        { lat: 43.481060, lng: -3.786929 }

    ];

    // Contruccion del poligono
    var areaSegundaPlayaDelSardinero = new google.maps.Polygon({
        paths: segundaPlayaDelSardinero,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    areaSegundaPlayaDelSardinero.setMap(map);

    //--------------------------------------
    //Primera Playa del Sardinero

    var primeraPlayaDelSardinero = [
        { lat: 43.476778, lng: -3.778782 },
        { lat: 43.476747, lng: -3.777473 },
        { lat: 43.474925, lng: -3.775091 },
        { lat: 43.474427, lng: -3.775027 },
        { lat: 43.471344, lng: -3.778460 },
        { lat: 43.471982, lng: -3.781292 },
        { lat: 43.473664, lng: -3.783674 },
        { lat: 43.474267, lng: -3.783315 },
        { lat: 43.476778, lng: -3.778782 }

    ];

    // Contruccion del poligono
    var areaPrimeraPlayaDelSardinero = new google.maps.Polygon({
        paths: primeraPlayaDelSardinero,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#1e88e5',
        fillOpacity: 0.45
    });
    areaPrimeraPlayaDelSardinero.setMap(map);

    //--------------------------------------
    //

    var contentString =
        '<p><h2>Primera Playa del Sardinero</h2></p>' +
        '<p>Playa situada en el núcleo urbano de Santander,' +
        'unida en la bajamar con la Segunda y La Concha, ' +
        'siendo la parte más al norte del extenso arenal ' +
        'situado entre cabo Menor y la Península de la Magdalena. ' +
        'Casi 2 kilómetros de fina arena. Durante mucho tiempo, ' +
        'caladero de sardinas, de ahí proviene el nombre de El Sardinero.</p>';

    var infoWindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker;

    areaPrimeraPlayaDelSardinero.addListener('click', function() {
        marker = new google.maps.Marker({
            position: { lat: 43.47286, lng: -3.781185 },
            map: map,
            title: 'PPS'
        });
        infoWindow.open(map, marker);
    });

    google.maps.event.addListener(infoWindow, 'closeclick', function() {
        marker.setMap(null);
    });

}
