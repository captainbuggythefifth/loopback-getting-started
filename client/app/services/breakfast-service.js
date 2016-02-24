angular.module('breakfastService', [])

.factory('BreakfastService', function ($http) {
    var breakfastFactory = {};

    breakfastFactory.all = function() {
        return $http.get('/api/breakfastspots');
    }

    return breakfastFactory;
})