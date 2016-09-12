angular.module('myapp',[]).controller('controller', controller);
controller.$inject = ['$http'];
function controller($http) {
    var vm = this;
    vm.loadNewPage = function (){
        console.log('sending post request');
        $http.post('http://localhost:3000/',{name:'nolan'})
    }
}
