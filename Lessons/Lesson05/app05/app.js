angular
    .module('MyProperApp', ['ngRoute'])
    .config(config);
function config($routeProvider){
    $routeProvider
        .when('/', {
            template: '<h1>This is a homepage.</h1>'
        })
        .when('/about', {
            template: '<h1>This is about page.</h1>'
        })
        .otherwise({
            template:'<h1>You are in a wrong place.</h1>'
        });
}

