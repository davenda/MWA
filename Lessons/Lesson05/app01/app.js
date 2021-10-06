angular.module('MyProperApp', ['ngRoute']).config(config);

function config(){
    $routeProvider
        .when('/', {
            templateUrl: 'template/main.html'
        })
        .when('/about', {
            templateUrl: 'template/about.html'
        })
}