angular.module('MyFirstApp')
    .controller('MyControllerApp', MyControllerApp);
function MyControllerApp(){
    const vm = this;
    vm.name = 'JackDaniel';
}