angular.module('myControllerApp').controller('AboutController', AboutController);
function AboutController(){
    const vm = this;
    vm.about = 'This is my bio'
}