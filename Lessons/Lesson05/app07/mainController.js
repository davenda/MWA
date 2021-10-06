angular
    .module('MyFirstApp')
    .controller('MainController', MainController);
function MainController(){
    const vm = this;
    vm.name = 'Jack'
}