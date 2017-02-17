(function() {

var map = new google.maps.Map(document.querySelector('.map-wrapper')), marker;

function initMap(position){

	map.setCenter({ lat: position.coords.latitude, lng: position.coords.longitude }); //passes dynamic variables through method NOTE: objects require commas, methods require semicolons
	map.setZoom(14);

	marker = new google.maps.Marker({
	position: { lat: position.coords.latitude, lng: position.coords.longitude },
	map: map,
	title: "Hello world!"
});

	
}

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(initMap, handleError); //this function requirs a success callback and an error callback. The error callback runs when it fails.
}else{

	console.log("Failure to load.");
}

function handleError() {

console.log("Something went wrong.");

}


})();