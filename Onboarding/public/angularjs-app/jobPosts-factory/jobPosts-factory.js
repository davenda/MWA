angular
    .module('PostApp')
    .factory('PostDataFactory', PostDataFactory);
function PostDataFactory($http){
    return {
        getOnePost: getOnePost,
        getAllPosts: getAllPosts,
        addPost: addPost,
        modifyPost: modifyPost,
        deletePost: deletePost
    }
    function getOnePost(postId){
        return $http
            .get('/api/posts/' + postId)
            .then(complete)
            .catch(failed);
    } 
    function getAllPosts(postId){
        return $http
            .get('/api/posts')
            .then(complete)
            .catch(failed);
    }
    function addPost(postData){
        return $http
            .post('/api/posts', postData)
            .then(complete)
            .catch(failed);
    }
    function modifyPost(postId){
        return $http
            .patch('/api/post/' + postId)
            .then(complete)
            .catch(failed)
    }
    function deletePost(postId){
        return $http
            .deletePost('/api/post/' + postId)
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