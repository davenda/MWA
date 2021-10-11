angular.module('TripApp', ['ngRoute'])
    .config(config);

function config($routeProvider){
    $routeProvider
        .when('/trips', {
            templateUrl: 'angularjs-app/trip-all/trip-all.html',
            controller: 'TripsController',
            controllerAs: 'vm'
        })
        .when('/', {
            templateUrl: 'angularjs-app/home/home.html'
        })
        .when('/trips/:tripId', {
            templateUrl: 'angularjs-app/trip-one/trip-one.html',
            controller: 'TripController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        });
}