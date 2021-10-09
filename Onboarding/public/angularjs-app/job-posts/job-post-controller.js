angular
    .module('PostApp')
    .controller('PostsController', PostsController);

function PostsController(PostDataFactory){
    const vm = this;
    vm.title = 'PostApp'
    // $http.get('/api/posts')
    //     .then(function(data){
    //         vm.posts = data;
    //     })
    PostDataFactory
        .getAll()
        .then(function(response){
            vm.list = response;
        })
}
