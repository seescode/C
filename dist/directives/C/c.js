(function () {
    'use strict';
    

    function c() {
        return {
            restrict: 'E',
            //scope: {
            //},
            replace: false,
            templateUrl: '/directives/C/c.html',
            link: function (scope, element, attrs) {
                scope.click = function() {
                    alert('abcd');
                };
            }
        };
    };
    angular.module('atom.c').directive('c', c);
})();