mapboxgl.accessToken = 'api token';


navigator.geolocation.getCurrentPosition(sucessLoacation,errorLocation,{enableHighAccuracy:true});
function sucessLoacation(position){

    console.log(position);
    setupMap([position.coords.longitude,position.coords.latitude])
}
function errorLocation(){
    setupMap([28.7041,77.1025])
}

function setupMap(center){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center:center,
        zoom:15
    });
     //control
    map.addControl(new mapboxgl.NavigationControl());

    //direction control 
    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        
      });
     map.addControl(directions, 'top-left');

      
        // Add geolocate control to the map.
    map.addControl(
        new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
        },
        trackUserLocation: true
        })
        );
   

//         var popup = new mapboxgl.Popup({ closeOnClick: false })
// .setLngLat(center)
// .setHTML('<h1>start exploring</h1>')
// .addTo(map);
}
   
