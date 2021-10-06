angular.module('myTemplateApp', ['ngRoute']).config(config);
function config($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'template/main.html',
        // controller: 'MainController',
        // controllerAs: 'mainCtrl'
    }).when('/about', {
        templateUrl: 'template/about.html',
        // controller: 'AboutController',
        // controllerAs: 'aboutCtrl'
    });
}
