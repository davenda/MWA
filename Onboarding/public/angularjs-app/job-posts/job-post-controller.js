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
    vm.addStatus = '';
    PostDataFactory
        .getAllPosts()
        .then(function(response){
            vm.posts = response;
        })
    vm.addPost = function(){
        const postData = {
            title: vm.newPostTitle,
            salary: vm.newSalary,
            street: vm.newStreet,
            state: vm.newState,
            country: vm.newCountry,
            city: vm.newCity,
            zip: vm.newZip,
            postDate: vm.newDate,
            skills: vm.newSkills.split(',')
        }
        console.log(postData);
        console.log(vm.postForm.$valid);
        if(vm.postForm.$valid){
            PostDataFactory
                .addPost(postData)
                .then(function(response){
                    vm.addStatus = 'Game Added Successfully';
                })
                .catch(function(err){
                    vm.addStatus = err;
                })
        }

    }
}
