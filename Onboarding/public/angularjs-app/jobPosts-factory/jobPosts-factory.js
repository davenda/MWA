angular
    .module('PostApp')
    .factory('PostDataFactory', PostDataFactory);
function PostDataFactory($http){
    return {
        getOnePost: getOnePost,
        getAllPosts: getAllPosts
    }
    function getOnePost(postId){
        return $http
            .get('/api/posts/:' + postId)
            .then(complete)
            .catch(failed);
    } 
    function getAllPosts(){
        return $http
            .get('/api/posts')
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