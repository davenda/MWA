angular
    .module('TripApp')
    .controller('TripsController', TripsController);

function TripsController(TripDataFactory){
    const vm = this;
    vm.title = 'PostApp'

    vm.addStatus = '';
    TripDataFactory
        .getAllTrips()
        .then(function(response){
            vm.trips = response;
        })
    vm.addTrip = function(){

        console.log(tripData);
        console.log(vm.tripForm.$valid);
        if(vm.tripForm.$valid){
            TripDataFactory
                .addPost(tripData)
                .then(function(response){
                    vm.addStatus = 'Trip Added Successfully';
                })
                .catch(function(err){
                    vm.addStatus = err;
                })
        }

    }
    vm.deleteTrip = function(tripId){
        console.log(vm.tripForm.$valid);
        if(vm.tripForm.$valid){
            TripDataFactory
                .deleteTrip(tripId)
                .then(function(response){
                    vm.addStatus = 'Trip Deleted Successfully';
                })
                .catch(function(err){
                    vm.addStatus = err;
                })
        }

    }
}
