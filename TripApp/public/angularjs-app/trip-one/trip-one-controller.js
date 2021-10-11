angular
    .module('TripApp')
    .controller('TripController', TripController);

function TripController(TripDataFactory, $routeParams){
    const vm = this;
    console.log($routeParams);
    TripDataFactory
        .getOneTrip($routeParams.tripId)
        .then(function(response){
            console.log(response);
            vm.data = response;
        })
}