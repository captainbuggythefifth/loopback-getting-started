angular.module('appRoutes', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider) {


        $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
                url: '/',
                templateUrl: 'app/views/pages/partial-home.html',
                controller: "BreakfastController",
                controllerAs: "breakfast"
            })

            .state('home.list', {
                url: 'list',
                templateUrl: 'app/views/pages/partial-home-list.html',
                controller: function($scope) {
                    $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
                }
            })

            // nested list with just some random string data
            .state('home.paragraph', {
                url: 'paragraph',
                template: 'I could sure use a drink right now.'
            })

            .state('home.signup', {
                url: 'signup',
                templateUrl: 'app/views/pages/sign-up.html'
            })



        $urlRouterProvider.otherwise('/');

    });