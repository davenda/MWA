angular
    .module('MyFirstApp')
    .controller('MainController', MainController);
function MainController(JokeFactory){
    const vm = this;
    JokeFactory
        .getTenJokes()
        .then(function(res){
            vm.jokes = res.value;
        });
        
}