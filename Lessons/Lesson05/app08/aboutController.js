angular
    .module('MyFirstApp')
    .controller('AboutController', AboutController);
function AboutController(){
    const vm = this;
    vm.bio = 'This is my bio'
}