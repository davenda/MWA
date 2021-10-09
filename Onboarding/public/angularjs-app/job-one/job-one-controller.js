angular
    .module('PostApp')
    .controller('PostController', PostController);

function PostController(PostDataFactory, $routeParams){
    const vm = this;
    console.log($routeParams);
    // $http.get('/api/posts/' + $routeParams.postId)
    //     .then(function(response){
    //         vm.data = response.data;
    //     })
    PostDataFactory
        .getOnePost($routeParams.postId)
        .then(function(response){
            vm.data = response;
        })
}