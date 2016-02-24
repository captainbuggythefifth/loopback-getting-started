angular.module('authController', ['lbServices'])
.controller('AuthLogInController', function ($scope, Client) {
    var vm = this;
    vm.processing = true;

    vm.login = function () {
        Client.login({email: vm.logInData.email, password: vm.logInData.password}, function (response) {
            console.log(response);
        })
    }
})

.controller('AuthLogOutController', function ($scope, Client) {
    var vm = this;
    vm.processing = true;

    vm.logout = function () {
        Client.logout(Client.getToken(), function (response) {
            console.log(response);
        })
    }

})