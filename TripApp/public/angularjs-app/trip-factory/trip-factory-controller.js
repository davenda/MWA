angular
    .module('TripApp')
    .factory('TripDataFactory', TripDataFactory);
function TripDataFactory($http){
    return {
        getOneTrip: getOneTrip,
        getAllTrips: getAllTrips,
        addTrip: addTrip,
        modifyTrip: modifyTrip,
        deleteTrip: deleteTrip
    }
    function getOneTrip(tripId){
        return $http
            .get('/api/trips/' + tripId)
            .then(complete)
            .catch(failed);
    } 
    function getAllTrips(){
        return $http
            .get('/api/trips')
            .then(complete)
            .catch(failed);
    }
    function addTrip(tripData){
        return $http
            .post('/api/trips', tripData)
            .then(complete)
            .catch(failed);
    }
    function modifyTrip(tripId){
        return $http
            .patch('/api/post/' + tripId)
            .then(complete)
            .catch(failed)
    }
    function deleteTrip(tripId){
        return $http
            .deleteTrip('/api/post/' + tripId)
            .then(complete)
            .catch(failed);
    }
    function complete(response){
        console.log(response.data)
        return response.data;
    }
    function failed(err){
        return err.status.statusText;
    }
}