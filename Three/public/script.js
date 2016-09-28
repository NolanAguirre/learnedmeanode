angular.module('myapp',[]).controller('controller', controller);
controller.$inject = ['$http'];
function controller($http) {
    var vm = this;
    vm.put = function (){
        console.log('sending put request');
        $http.put('http://localhost:3000/')
    }
    vm.post = function (){
        console.log('sending post request');
        $http.post('http://localhost:3000/#',{file:2})
    }
    vm.delete = function (){
        console.log('sending delete request');
        //$http.delete('http://localhost:3000/'},{file:'2'})
    }
    vm.head = function (){
        console.log('sending head request');
        //$http.head('http://localhost:3000/#/'})
    }
    vm.get = function (){
        console.log('sending get request');
        $http.get('http://localhost:3000/')
    }
}
