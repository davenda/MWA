angular
    .module('MyProperApp', ['ngRoute'])
    .config(config);
function config($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: "template/main.html"
        })
        .when('/about', {
            templateUrl: 'template/about.html'
        })
        .otherwise({
            template:'<h1>You are in a wrong place.</h1>'
        });
}
