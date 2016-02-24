angular.module('clientController', ['lbServices'])

.controller('SignUpController', function ($scope, Client) {
    var vm = this;

    vm.processing = true;
    vm.error = "";
    vm.res = "";
    vm.signUp = function (){
        Client.findOne({ "email": vm.signUpData.email }, function (err, client) {
            if(err){
                vm.error = "Something went wrong. Please try again later";
            }
            if(client.id === "undefined"){
                Client.create(vm.signUpData, function (res) {
                    $scope.redirect("/");
                })
            }
            else{
                vm.error = "It seems that you have already signed in. Please verify your account";
            }
        });
        console.log(vm.error);
    };
    vm.clients = Client.find();

    vm.logIn = function (res) {
        Client.login({ "email": vm.signIn.email, "password": vm.signIn.password }, function (err, token) {
            
        })
    }
})