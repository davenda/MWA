angular
    .module('MyFirstApp')
    .controller('MainController', MainController);
function MainController($http){
    const vm = this;
    $http.get('http://api.icndb.com/jokes/random/10')
        .then(function(res){
            vm.jokes = res.data.value;
        });
}