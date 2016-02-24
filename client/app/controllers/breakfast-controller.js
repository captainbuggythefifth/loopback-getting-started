angular.module('breakfastController', ['lbServices'])

.controller('BreakfastController', function ($scope, Breakfast) {
    var vm = this;
    vm.breakfasts = Breakfast.find();
})