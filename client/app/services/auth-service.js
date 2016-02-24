angular.module('authService', ['lbServices'])

.factory('AuthService', function (Client) {
    
})
.factory('SignUp', function ($http) {
    var signUpFactory = {};

    signUpFactory.create = function (signUpData) {
        var res = Client.find({
            "email": signUpData.email
        });

        console.log(res);
    }
})