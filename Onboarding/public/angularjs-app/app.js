angular.module('PostApp', ['ngRoute'])
    .config(config);

function config($routeProvider){
    $routeProvider
        .when('/posts', {
            templateUrl: 'angularjs-app/job-posts/job-post.html',
            controller: 'PostsController',
            controllerAs: 'vm'
        })
        .when('/', {
            templateUrl: 'angularjs-app/home/home.html'
        })
        .when('/posts/:postId', {
            templateUrl: 'angularjs-app/job-one/job-one.html',
            controller: 'PostController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        });
}